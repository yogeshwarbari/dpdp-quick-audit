import { useState } from 'react'

export default function Home() {
  const [repoUrl, setRepoUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const handleScan = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      const response = await fetch('/api/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ repo_url: repoUrl })
      })
      
      if (!response.ok) {
        throw new Error('Scan failed')
      }
      
      const data = await response.json()
      setResult(data)
    } catch (error) {
      setError('Error: ' + error.message + '. Make sure repo is public.')
    } finally {
      setLoading(false)
    }
  }

  const scoreColor = (score) => {
    if (score >= 80) return '#10b981'
    if (score >= 60) return '#f59e0b'
    if (score >= 40) return '#ef4444'
    return '#991b1b'
  }

  const severityColor = (severity) => {
    switch(severity.toUpperCase()) {
      case 'CRITICAL': return '#dc2626'
      case 'HIGH': return '#ea580c'
      case 'MEDIUM': return '#eab308'
      default: return '#3b82f6'
    }
  }

  const severityEmoji = (severity) => {
    switch(severity.toUpperCase()) {
      case 'CRITICAL': return '🔴'
      case 'HIGH': return '🟠'
      case 'MEDIUM': return '🟡'
      default: return '🔵'
    }
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
      {/* Header */}
      <h1 style={{ textAlign: 'center', fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>
        🔐 DPDP Quick Audit
      </h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '15px' }}>
        Scan GitHub repos for compliance violations using CodeRabbit + Cline
      </p>
      <p style={{ textAlign: 'center', color: '#999', fontSize: '14px', marginBottom: '40px' }}>
        ⚡ Powered by CodeRabbit rules and Cline's autonomous analysis
      </p>

      {/* Scan Form */}
      <form onSubmit={handleScan} style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            placeholder="https://github.com/owner/repo"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            style={{
              flex: 1,
              padding: '12px',
              fontSize: '16px',
              border: '2px solid #ddd',
              borderRadius: '8px',
              fontFamily: 'monospace'
            }}
            required
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '12px 32px',
              fontSize: '16px',
              fontWeight: 'bold',
              backgroundColor: loading ? '#ccc' : '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'background 0.3s'
            }}
          >
            {loading ? '⏳ Scanning...' : '🔍 Scan'}
          </button>
        </div>
        <p style={{ color: '#999', fontSize: '13px', marginTop: '8px' }}>
          💡 Try: https://github.com/pallets/flask
        </p>
      </form>

      {/* Error Message */}
      {error && (
        <div style={{
          backgroundColor: '#fee2e2',
          border: '1px solid #fecaca',
          color: '#dc2626',
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          {error}
        </div>
      )}

      {/* Results */}
      {result && (
        <div style={{
          backgroundColor: '#f9fafb',
          padding: '30px',
          borderRadius: '12px',
          border: '1px solid #e5e7eb'
        }}>
          {/* Score Card */}
          <div style={{
            textAlign: 'center',
            marginBottom: '30px',
            padding: '30px',
            backgroundColor: 'white',
            borderRadius: '12px',
            border: '2px solid #e5e7eb'
          }}>
            <div style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: scoreColor(result.score),
              marginBottom: '10px'
            }}>
              {result.score}
            </div>
            <div style={{ fontSize: '18px', color: '#666', marginBottom: '10px' }}>
              DPDP Compliance Score
            </div>
            <div style={{
              fontSize: '14px',
              color: scoreColor(result.score),
              fontWeight: 'bold'
            }}>
              {result.score >= 80 ? '✅ COMPLIANT' : 
               result.score >= 60 ? '⚠️ MOSTLY COMPLIANT' : 
               result.score >= 40 ? '🟠 PARTIALLY COMPLIANT' :
               '❌ NON-COMPLIANT'}
            </div>
          </div>

          {/* Method Badge */}
          <div style={{
            backgroundColor: '#dbeafe',
            border: '1px solid #bfdbfe',
            color: '#1e40af',
            padding: '10px 12px',
            borderRadius: '6px',
            fontSize: '13px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            🛠️ Scan Method: {result.scan_method}
          </div>

          {/* Summary */}
          <p style={{ fontSize: '16px', marginBottom: '25px', color: '#333' }}>
            <strong>Summary:</strong> {result.summary}
          </p>

          {/* Violations */}
          {result.violations.length > 0 && (
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>
                🐛 Issues Found ({result.violations.length})
              </h2>
              <div style={{ display: 'grid', gap: '12px' }}>
                {result.violations.map((v, i) => (
                  <div key={i} style={{
                    backgroundColor: 'white',
                    padding: '16px',
                    borderRadius: '8px',
                    borderLeft: `4px solid ${severityColor(v.severity)}`,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '5px', fontSize: '15px' }}>
                      {severityEmoji(v.severity)} {v.type}
                    </div>
                    <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                      Severity: <span style={{ fontWeight: 'bold', color: severityColor(v.severity) }}>
                        {v.severity}
                      </span>
                    </div>
                    <div style={{
                      fontSize: '13px',
                      backgroundColor: '#f3f4f6',
                      padding: '10px',
                      borderRadius: '6px',
                      marginTop: '8px',
                      borderLeft: `3px solid ${severityColor(v.severity)}`
                    }}>
                      <strong>💡 Fix:</strong> {v.fix}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {result.violations.length === 0 && (
            <div style={{
              backgroundColor: '#f0fdf4',
              border: '2px solid #bbf7d0',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              color: '#166534'
            }}>
              ✅ No DPDP violations found! This repository appears compliant.
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <footer style={{
        marginTop: '60px',
        paddingTop: '20px',
        borderTop: '1px solid #e5e7eb',
        textAlign: 'center',
        color: '#999',
        fontSize: '13px'
      }}>
        Built with CodeRabbit + Cline for Assemble Hack 25 🚀
      </footer>
    </div>
  )
}