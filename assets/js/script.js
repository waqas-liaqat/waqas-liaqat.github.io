// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });
    }
    
    // Project Categories Filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // Filter projects
            projectCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Project Modal Functionality
    const modal = document.getElementById('projectModal');
    const closeModal = document.querySelector('.close-modal');
    const viewProjectButtons = document.querySelectorAll('.view-project-btn');
    
    // Project data (in a real scenario, this might come from a database)
    const projectsData = {
        'InsuranceMeetingManager': {
            title: 'AI-Powered Insurance Meeting Manager',
            description: 'This intelligent automation system, built in n8n, processes Zoom meeting transcripts immediately after a session ends to create a structured, insurance-specific meeting summary. Once the Zoom call concludes, the workflow automatically retrieves the transcript and emails the meeting host, prompting them to upload any handwritten notes taken during the discussion. Using Mistral AI, these notes undergo OCR-based text extraction and are semantically analyzed alongside the transcript through OpenAI GPT-4 to identify whether critical insurance thresholds, like the 90% coverage rule, were discussed. If confirmed, the system generates a professionally formatted email confirmation using a pre-designed HTML template and sends it to the meeting participant, ensuring compliance documentation and follow-up communication are seamless and automated. This workflow eliminates manual post-meeting processing, reduces human error, and ensures timely client engagement, making it an invaluable AI assistant for financial advisors, insurance agents, and compliance teams.',
            technologies: ['n8n','Zoom API (Webhook)','Outlook / Gmail API','Mistral AI','OpenAI GPT-4','Google Sheets API','Google Docs API', 'HTML/CSS' ],

            media: [
                {type: 'image', url: 'assets/images/Insurance Meeting Manager/InsuranceMeetingManager.png'},
                {type: 'image', url: 'assets/images/InsuranceMeetingManager/workflow.png'},
            ],
            liveDemo: '#',
            github: '#'
        },
        'AdsPerformanceDashboard': {
            title: 'AI-Powered Multi-Platform Ads Performance Dashboard',
            description: 'The AI-Powered Multi-Platform Ads Performance Dashboard is a fully automated analytics system built with n8n that streamlines daily marketing reporting across multiple ad platforms. Every day, the workflow automatically fetches real-time advertising data from Google Ads, Meta Ads, and TikTok Ads, along with Shopify sales performance. It then retrieves daily performance targets from a Google Sheet, compares actual results to those goals, and uses OpenAI GPT to analyze performance gaps and suggest optimization strategies. The insights are delivered directly to Slack in a beautifully formatted message summarizing spend, clicks, conversions, sales, and AI-driven recommendations. This automation replaces hours of manual reporting, enabling marketing teams to track performance at a glance and make informed decisions instantly. This system is particularly valuable for eCommerce and performance marketing teams seeking actionable insights without needing to switch between multiple dashboards - a perfect blend of data automation and AI intelligence.',
            technologies: ['n8n', 'Google Ads API', 'Meta Graph API', 'TikTok Ads API','Shopify API','Google Sheets API','OpenAI GPT (AI Agent)','Slack API'],

            media: [
                {type: 'image', url: 'assets/images/AIPowered MultiPlatform Ads Performance Dashboard/AIPoweredMultiPlatformAdsPerformanceDashboard.png'},
                {type: 'image', url: 'assets/images/AIPowered MultiPlatform Ads Performance Dashboard/workflow.png'},
                {type: 'image', url: 'assets/images/AIPowered MultiPlatform Ads Performance Dashboard/demo1.png'},
                {type: 'image', url: 'assets/images/AIPowered MultiPlatform Ads Performance Dashboard/demo2.png'},
                {type: 'image', url: 'assets/images/AIPowered MultiPlatform Ads Performance Dashboard/demo3.png'},
            ],
            liveDemo: '#',
            github: '#'
        },
        'CriminalCaseIntakeSystem': {
            title: 'Automated Criminal Case Intake System',
            description: 'The Automated Criminal Case Intake System is a fully agentic workflow built in n8n that autonomously monitors, scrapes, and analyzes newly caught criminal data from public mugshot databases every day. The system identifies only newly listed individuals since the last scan, fetches their details, and evaluates each case using an integrated AI agent powered by Jina AI to determine whether the firm should handle the case based on predefined legal and business rules. Once the decision is made, the workflow uses Octoparse AI to automatically visit the respective department’s portal and fill out relevant forms to request footage, evidence, and additional case data. All operations (data logs, case decisions, and processing outcomes) are dynamically stored and updated in Google Sheets for transparency and record-keeping. This system transforms a traditionally manual, time-intensive process into an intelligent and scalable legal automation solution. It eliminates human error, speeds up client intake, and ensures that only high-value cases reach the firm’s attention, streamlining daily operations and improving decision accuracy.',
            technologies: ['n8n', 'Jina AI', 'Octoparse AI', 'Google Sheets API','OpenAI GPT-4o-mini'],

            media: [
                {type: 'image', url: 'assets/images/Automated Criminal Case Intake System/AutomatedCriminalCaseIntakeSystem.png'},
                {type: 'image', url: 'assets/images/Automated Criminal Case Intake System/workflow1.png'},
                {type: 'image', url: 'assets/images/Automated Criminal Case Intake System/workflow3.png'},
            ],
            liveDemo: '#',
            github: '#'
        },
        'realestatenewsletter': {
            title: 'Automated Real Estate Newsletter System',
            description: 'The Automated Real Estate Newsletter System is an AI-driven automation that streamlines weekly real estate market reporting and communication for agencies. Every Monday, the workflow automatically triggers to gather the latest real estate news from Yahoo Finance and The Wall Street Journal, analyzes trends using OpenAI GPT, and generates a professional newsletter. This newsletter includes segments such as Market Pulse, Agent Advantage, Client Talk Scripts, and Expert Corner, offering valuable insights and actionable content for real estate professionals. Once generated, the system formats everything into a polished HTML email template and sends it automatically via Gmail to subscribers. By eliminating manual research, writing, and formatting tasks, this workflow ensures consistent, data-backed, and timely updates every week. It’s an ideal solution for real estate firms looking to enhance client engagement and stay ahead with market intelligence, without spending hours on content creation.',
            technologies: ['n8n', 'Yahoo Finance RSS', 'Wall Street Journal RSS', 'SerpAPI', 'OpenAI GPT-4o-mini', 'Gmail API', 'HTML/CSS'],

            media: [
                {type: 'image', url: 'assets/images/Automated Real Estate Newsletter System/AutomatedRealEstateNewsletterSystem.png'},
                {type: 'image', url: 'assets/images/Automated Real Estate Newsletter System/workflow.png'},
                {type: 'image', url: 'assets/images/Automated Real Estate Newsletter System/demo.png'}
            ],
            liveDemo: '#',
            github: '#'
        },
        'agentic-ai-2': {
            title: 'Automated SEO Audit & Outreach System',
            description: 'This project is an end-to-end automated SEO audit and outreach solution built using n8n. It fetches website URLs from a Google Sheet, runs detailed SEO analyses via Semrush APIs (covering domain overview, organic keywords, and backlinks), and then leverages OpenAI (GPT-4o-mini) to generate structured summaries and recommendations. The system formats the results into a professional HTML email and automatically sends it to the respective website owners via Gmail, highlighting issues with their SEO and offering tailored solutions. By automating the process, this workflow eliminates manual effort in prospecting, reporting, and initial outreach, making it ideal for digital marketing agencies or freelancers offering SEO services at scale.',
            technologies: ['n8n', 'Google Sheets', 'Semrush API', 'OpenAI (GPT-4o-mini)', 'Gmail API'],
            media: [
                {type: 'image', url: 'assets/images/Automated SEO Audit & Outreach System/Automated SEO Audit & Outreach System.png'},
                {type: 'image', url: 'assets/images/Automated SEO Audit & Outreach System/Automated SEO Audit & Outreach System1.png'}
            ]
        },
        'cardiopredict': {
            title: 'CardioPredict Machine Learning Approach',
            description: 'A machine learning model for predicting cardiovascular diseases with high accuracy. This project involved comprehensive data preprocessing, feature engineering, and model selection to develop a robust predictive system. The final model achieved 92% accuracy in identifying patients at risk of cardiovascular diseases.',
            technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter Notebook'],
            media: [
                {type: 'image', url: 'assets/images/heartdiseaselogo.png'},
                {type: 'image', url: 'assets/images/cardiopredict-model.jpg'},
                {type: 'image', url: 'assets/images/cardiopredict-results.jpg'}
            ],
            liveDemo: '#',
            github: '#'
        },
        'playstore-eda': {
            title: 'Insights from Millions app Google Play Store EDA',
            description: 'Comprehensive exploratory data analysis of Google Play Store applications. This project involved analyzing a dataset of over 10,000 apps to uncover trends, patterns, and insights about the mobile app ecosystem. The analysis included user ratings, categories, pricing strategies, and content rating distributions.',
            technologies: ['Python', 'Pandas', 'Seaborn', 'Plotly', 'Jupyter Notebook', 'Data Visualization'],
            media: [
                {type: 'image', url: 'assets/images/eda.png'},
                {type: 'image', url: 'assets/images/playstore-dashboard.jpg'},
                {type: 'image', url: 'assets/images/playstore-insights.jpg'}
            ],
            liveDemo: '#',
            github: '#'
        },
        'music-store': {
            title: 'MUSIC STORE DATA ANALYSIS',
            description: 'Analysis of music store data to derive business insights and customer behavior patterns. This project involved analyzing sales data, customer demographics, and product performance to provide actionable recommendations for business growth. The analysis revealed key trends in music consumption and customer preferences.',
            technologies: ['SQL', 'Power BI', 'Excel', 'Data Analysis', 'Business Intelligence'],
            media: [
                {type: 'image', url: 'assets/images/musiclogo.webp'},
                {type: 'image', url: 'assets/images/music-store-dashboard.jpg'},
                {type: 'image', url: 'assets/images/music-sales-analysis.jpg'}
            ],
            liveDemo: '#',
            github: '#'
        },
        'fifa21': {
            title: 'FIFA21 Data Cleaning',
            description: 'Comprehensive data cleaning and preprocessing of FIFA21 player dataset. This project involved handling missing values, outlier detection, feature engineering, and data normalization to prepare the dataset for analysis and modeling. The cleaned dataset was used for player performance analysis and team composition optimization.',
            technologies: ['Python', 'Pandas', 'NumPy', 'Data Cleaning', 'Data Preprocessing'],
            media: [
                {type: 'image', url: 'assets/images/fifa21.webp'},
                {type: 'image', url: 'assets/images/fifa-data-cleaning.jpg'},
                {type: 'image', url: 'assets/images/fifa-player-analysis.jpg'}
            ],
            liveDemo: '#',
            github: '#'
        },
        'electrohub': {
            title: 'ELECTROHUB Retail Analytics Dashboard',
            description: 'Interactive dashboard for retail analytics and business intelligence. This project involved designing and developing a comprehensive dashboard that provides insights into sales performance, inventory management, customer behavior, and regional performance. The dashboard enables data-driven decision making for retail operations.',
            technologies: ['Power BI', 'SQL', 'Data Visualization', 'Dashboard Design', 'Business Analytics'],
            media: [
                {type: 'image', url: 'assets/images/electrohublogo.webp'},
                {type: 'image', url: 'assets/images/electrohub-dashboard.jpg'},
                {type: 'image', url: 'assets/images/retail-analytics.jpg'}
            ],
            liveDemo: '#',
            github: '#'
        }
    };
    
    // Open modal when a project is clicked
    viewProjectButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });
    
    // Close modal when X is clicked
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside the content
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Function to open project modal
    function openProjectModal(projectId) {
        const project = projectsData[projectId];
        
        if (!project) {
            console.error('Project data not found for:', projectId);
            return;
        }
        
        // Set project details
        document.getElementById('projectTitle').textContent = project.title;
        document.getElementById('projectDescription').textContent = project.description;
        
        // Set technologies
        const techTagsContainer = document.getElementById('techTags');
        techTagsContainer.innerHTML = '';
        project.technologies.forEach(tech => {
            const tag = document.createElement('span');
            tag.className = 'tech-tag';
            tag.textContent = tech;
            techTagsContainer.appendChild(tag);
        });
        
        // Set project links
        document.getElementById('liveDemoLink').href = project.liveDemo;
        document.getElementById('githubLink').href = project.github;
        
        // Set media
        const mainMedia = document.getElementById('mainProjectImage');
        const thumbnailsContainer = document.querySelector('.media-thumbnails');
        
        if (project.media && project.media.length > 0) {
            mainMedia.src = project.media[0].url;
            mainMedia.alt = project.title;
            
            // Create thumbnails
            thumbnailsContainer.innerHTML = '';
            project.media.forEach((media, index) => {
                const thumbnail = document.createElement('div');
                thumbnail.className = 'thumbnail' + (index === 0 ? ' active' : '');
                thumbnail.innerHTML = `<img src="${media.url}" alt="${project.title} - Media ${index + 1}">`;
                
                thumbnail.addEventListener('click', function() {
                    // Update main image
                    mainMedia.src = media.url;
                    
                    // Update active thumbnail
                    document.querySelectorAll('.thumbnail').forEach(thumb => {
                        thumb.classList.remove('active');
                    });
                    this.classList.add('active');
                });
                
                thumbnailsContainer.appendChild(thumbnail);
            });
        }
        
        // Display the modal
        modal.style.display = 'block';
    }
});