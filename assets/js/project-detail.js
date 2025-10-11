// Project data
const projects = {
    'InsuranceMeetingManager': {
        title: 'AI-Powered Insurance Meeting Manager',
        category: 'Agentic AI',
        description: 'This intelligent automation system, built in n8n, processes Zoom meeting transcripts immediately after a session ends to create a structured, insurance-specific meeting summary. Once the Zoom call concludes, the workflow automatically retrieves the transcript and emails the meeting host, prompting them to upload any handwritten notes taken during the discussion. Using Mistral AI, these notes undergo OCR-based text extraction and are semantically analyzed alongside the transcript through OpenAI GPT-4 to identify whether critical insurance thresholds, like the 90% coverage rule, were discussed. If confirmed, the system generates a professionally formatted email confirmation using a pre-designed HTML template and sends it to the meeting participant, ensuring compliance documentation and follow-up communication are seamless and automated. This workflow eliminates manual post-meeting processing, reduces human error, and ensures timely client engagement, making it an invaluable AI assistant for financial advisors, insurance agents, and compliance teams.',
        technologies: ['n8n','Zoom API (Webhook)','Outlook / Gmail API','Mistral AI','OpenAI GPT-4','Google Sheets API','Google Docs API','HTML/CSS'],
        image: 'assets/images/Insurance Meeting Manager/InsuranceMeetingManager.png'
    },
    'AdsPerformanceDashboard': {
        title: 'AI-Powered Multi-Platform Ads Performance Dashboard',
        category: 'Agentic AI',
        description: 'The AI-Powered Multi-Platform Ads Performance Dashboard is a fully automated analytics system built with n8n that streamlines daily marketing reporting across multiple ad platforms. Every day, the workflow automatically fetches real-time advertising data from Google Ads, Meta Ads, and TikTok Ads, along with Shopify sales performance. It then retrieves daily performance targets from a Google Sheet, compares actual results to those goals, and uses OpenAI GPT to analyze performance gaps and suggest optimization strategies. The insights are delivered directly to Slack in a beautifully formatted message summarizing spend, clicks, conversions, sales, and AI-driven recommendations. This automation replaces hours of manual reporting, enabling marketing teams to track performance at a glance and make informed decisions instantly. This system is particularly valuable for eCommerce and performance marketing teams seeking actionable insights without needing to switch between multiple dashboards, a perfect blend of data automation and AI intelligence.',
        technologies: ['n8n', 'Google Ads API', 'Meta Graph API', 'TikTok Ads API','Shopify API','Google Sheets API','OpenAI GPT (AI Agent)','Slack API'],
        image: 'assets/images/AIPowered MultiPlatform Ads Performance Dashboard/AIPoweredMultiPlatformAdsPerformanceDashboard.png'
    },
    'CriminalCaseIntakeSystem': {
        title: 'Automated Criminal Case Intake System',
        category: 'Agentic AI',
        description: 'The Automated Criminal Case Intake System is a fully agentic workflow built in n8n that autonomously monitors, scrapes, and analyzes newly caught criminal data from public mugshot databases every day. The system identifies only newly listed individuals since the last scan, fetches their details, and evaluates each case using an integrated AI agent powered by Jina AI to determine whether the firm should handle the case based on predefined legal and business rules. Once the decision is made, the workflow uses Octoparse AI to automatically visit the respective department’s portal and fill out relevant forms to request footage, evidence, and additional case data. All operations (data logs, case decisions, and processing outcomes) are dynamically stored and updated in Google Sheets for transparency and record-keeping. This system transforms a traditionally manual, time-intensive process into an intelligent and scalable legal automation solution. It eliminates human error, speeds up client intake, and ensures that only high-value cases reach the firm’s attention, streamlining daily operations and improving decision accuracy.',
        technologies: ['n8n', 'Jina AI', 'Octoparse AI', 'Google Sheets API','OpenAI GPT-4o-mini'],
        image: 'assets/images/Automated Criminal Case Intake System/AutomatedCriminalCaseIntakeSystem.png'
    },
    'realestatenewsletter': {
        title: 'Automated Real Estate Newsletter System',
        category: 'Agentic AI',
        description: 'The Automated Real Estate Newsletter System is an AI-driven automation that streamlines weekly real estate market reporting and communication for agencies. Every Monday, the workflow automatically triggers to gather the latest real estate news from Yahoo Finance and The Wall Street Journal, analyzes trends using OpenAI GPT, and generates a professional newsletter. This newsletter includes segments such as Market Pulse, Agent Advantage, Client Talk Scripts, and Expert Corner, offering valuable insights and actionable content for real estate professionals. Once generated, the system formats everything into a polished HTML email template and sends it automatically via Gmail to subscribers. By eliminating manual research, writing, and formatting tasks, this workflow ensures consistent, data-backed, and timely updates every week. It’s an ideal solution for real estate firms looking to enhance client engagement and stay ahead with market intelligence, without spending hours on content creation.',
        technologies: ['n8n', 'Yahoo Finance RSS', 'Wall Street Journal RSS', 'SerpAPI', 'OpenAI GPT-4o-mini','Gmail API','HTML/CSS'],
        image: 'assets/images/Automated Real Estate Newsletter System/AutomatedRealEstateNewsletterSystem.png'
    },
    'customer-agent': {
        title: 'Automated SEO Audit & Outreach System',
        category: 'Agentic AI', 
        description: 'Automating SEO audits and personalized outreach at scale with Semrush, AI, and n8n.',
        technologies: ['n8n', 'Google Sheets', 'Semrush API', 'OpenAI (GPT-4o-mini)', 'Gmail API'],
        image: 'assets/images/Automated SEO Audit & Outreach System/Automated SEO Audit & Outreach System.png'
    },
    'cardiopredict': {
        title: 'CardioPredict Machine Learning Approach',
        category: 'Machine Learning',
        description: 'A machine learning model that predicts heart disease risk factors using patient data and medical history with high accuracy.',
        technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
        image: 'assets/images/heartdiseaselogo.png'
    },
    'playstore-eda': {
        title: 'Insights from Millions app Google Play Store EDA',
        category: 'Data Analysis',
        description: 'Comprehensive exploratory data analysis of Google Play Store applications to identify trends and success factors.',
        technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
        image: 'assets/images/eda.png'
    },
    'music-store': {
        title: 'MUSIC STORE DATA ANALYSIS',
        category: 'Data Analysis', 
        description: 'Analysis of music store sales data to identify customer preferences and optimize inventory management.',
        technologies: ['SQL', 'Power BI', 'Excel'],
        image: 'assets/images/musiclogo.webp'
    },
    'fifa21': {
        title: 'FIFA21 Data Cleaning',
        category: 'Data Analysis',
        description: 'Data cleaning and preprocessing of FIFA21 player dataset to prepare it for analysis and machine learning models.',
        technologies: ['Python', 'Pandas', 'Data Cleaning'],
        image: 'assets/images/fifa21.webp'
    },
    'electrohub': {
        title: 'ELECTROHUB Retail Analytics Dashboard',
        category: 'Data Analysis',
        description: 'Retail analytics dashboard for business intelligence and insights generation.',
        technologies: ['Power BI', 'SQL', 'Data Visualization'],
        image: 'assets/images/electrohublogo.webp'
    }
};

// Load project details
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project');
    const projectContent = document.getElementById('project-content');
    
    if (projectId && projects[projectId]) {
        const project = projects[projectId];
        
        projectContent.innerHTML = `
            <div class="project-header">
                <h2>${project.title}</h2>
                <p class="project-category">${project.category}</p>
            </div>

            <div class="project-main">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" style="width: 100%; max-width: 600px; border-radius: 10px;">
                </div>
                
                <div class="project-details">
                    <h3>Project Description</h3>
                    <p>${project.description}</p>
                    
                    <h3>Technologies Used</h3>
                    <ul>
                        ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    } else {
        projectContent.innerHTML = '<p>Project not found. <a href="projects.html">Return to projects</a></p>';
    }
});