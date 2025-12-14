# 🔐 DPDP Compliance Scanner

Automated compliance tool that scans GitHub repositories for violations of India's Digital Personal Data Protection Act, 2023.

## Quick Start

1. Visit the live app (Vercel URL)
2. Paste a **public** GitHub repository URL
3. Click "Scan"
4. Get compliance score (0-100) with actionable fixes

**Example:** `https://github.com/pallets/flask`

## Features

✅ **Real-time Scanning** - Analyzes actual code from GitHub repositories
✅ **10 Compliance Checks** - Critical to Low severity violations
✅ **Compliance Scoring** - 0-100 scale with clear breakdown
✅ **Actionable Fixes** - Specific remediation steps for each violation
✅ **Clean UI** - Minimalistic, fast, production-ready
✅ **Public Repos Only** - Scans any public GitHub repository

## What It Checks

### 🔴 CRITICAL (25 points each)
- **Hardcoded Secrets** - API keys, passwords in source code
- **Missing Password Encryption** - Passwords not hashed/encrypted

### 🟠 HIGH (15 points each)
- **No Data Retention Policy** - Data not deleted after retention period
- **No Consent Tracking** - User consent not tracked before collection
- **Missing Audit Logging** - Data access not logged for audit trails
- **Unencrypted Communication** - HTTP instead of HTTPS/TLS

### 🟡 MEDIUM (8 points each)
- **Missing Input Validation** - User inputs not validated
- **Sensitive Data in Logs** - PII logged without sanitization
- **Missing Access Controls** - Endpoints lack authentication

### 🔵 LOW (2 points)
- **Secrets Not in .gitignore** - .env files not properly ignored

## Scoring Formula

```
Base Score: 100 points

For each violation:
- CRITICAL: -25 points
- HIGH: -15 points
- MEDIUM: -8 points
- LOW: -2 points

Final Score: 0-100
```

**Interpretation:**
- 80-100: ✅ Compliant
- 60-79: ⚠️ Mostly Compliant
- 40-59: 🔶 Needs Work
- 0-39: ❌ Non-Compliant

## Supported Project Types

- 🐍 **Python** - Flask, Django, FastAPI
- ⚙️ **Node.js** - Express, Next.js, Koa
- 📱 **Frontend** - React, Vue, Angular
- ☁️ **Cloud Apps** - AWS, GCP, Azure
- 🗄️ **Data Apps** - Databases, APIs
- 🔐 **Any web project** with user data handling

## Requirements

- **Public GitHub Repository** (private repos cannot be scanned)
- Supported languages: Python, JavaScript/TypeScript, and more

## Tech Stack

**Frontend**
- Next.js + React
- Tailwind-inspired minimalist UI
- Responsive design

**Backend**
- FastAPI + Python
- Real-time code analysis
- Regex-based pattern matching

**Deployment**
- Vercel (production)
- GitHub (source control)

**Scanning**
- Raw GitHub file fetching
- Pattern-based violation detection
- Automated compliance scoring

## How It Works

1. **Fetch** - Retrieves code files from public GitHub repository
2. **Analyze** - Scans code against 10 DPDP compliance rules
3. **Score** - Calculates compliance score based on violations found
4. **Report** - Displays violations with severity levels and fixes

## Pages

- **Scanner** - Main scanning interface
- **Checks** - Details about all 10 compliance checks
- **About** - Project information and DPDP Act reference

## About DPDP Act 2023

India's Digital Personal Data Protection Act governs:
- Data protection and security
- User consent and transparency
- Data retention and deletion
- User rights (access, correct, delete)
- Breach notification requirements

This tool helps developers ensure their applications comply with these requirements.

## Limitations

- ⚠️ **Public repos only** - Cannot scan private repositories
- ⚠️ **Automated scanning** - Not a substitute for professional security audit
- ⚠️ **Pattern matching** - Uses regex analysis, not AI/ML
- ⚠️ **Code-based only** - Checks source code, not runtime behavior

## Disclaimer

This tool provides automated scanning for educational and compliance purposes. It should not be considered a complete compliance audit or security assessment. For comprehensive DPDP compliance, consult with legal and security professionals.

## Built for

**Assemble Hack 25** - A global hackathon for AI agents and automation tools.

## Project Structure

```
dpdp-quick-audit/
├── frontend/
│   ├── pages/
│   │   ├── index.js         (Scanner)
│   │   ├── checks.js        (Compliance checks)
│   │   ├── about.js         (About page)
│   │   └── _app.js          (App wrapper)
│   ├── components/
│   │   └── Navbar.js        (Navigation)
│   ├── styles/
│   │   └── globals.css      (Styling)
│   └── package.json
│
├── backend/
│   ├── main.py              (FastAPI app)
│   └── requirements.txt      (Dependencies)
│
├── .gitignore
├── vercel.json              (Deployment config)
└── README.md
```

## Getting Started (Local Development)

### Prerequisites
- Python 3.8+
- Node.js 14+
- Git

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
python main.py
```

Backend runs on `http://localhost:8000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:3000`

### Test

1. Visit `http://localhost:3000`
2. Scan a public repo: `https://github.com/pallets/flask`
3. See compliance score and violations

## Deployment

Deployed on Vercel. To deploy your own:

1. Push to GitHub
2. Import project to Vercel
3. Vercel auto-builds and deploys
4. Get live URL

## Example Scans

Try scanning these popular repositories:

- `https://github.com/pallets/flask` - Web framework
- `https://github.com/django/django` - Web framework
- `https://github.com/tiangolo/fastapi` - API framework
- `https://github.com/expressjs/express` - Node.js framework

## Contributing

This is a hackathon project. Contributions welcome via pull requests.

## License

MIT

## Support

For issues or questions, please open a GitHub issue.

## Hackathon Info

- **Event:** Assemble Hack 25
- **Theme:** AI Agents and Automation
- **Prize Categories:**
  - Stormbreaker Deployment Award (Vercel)
  - Captain Code Award (Code Quality)
  - Infinity Build Award (Autonomous Scanning)

## Contact

Built during Assemble Hack 25. 

For questions or feedback, please reach out.

---

**Start scanning for DPDP compliance today!** 🚀