<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web3 Freelancer Payment System</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: #f8fafc;
            line-height: 1.6;
            overflow-x: hidden;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        header {
            text-align: center;
            padding: 40px 0;
            background: linear-gradient(90deg, #2563eb 0%, #7c3aed 100%);
            border-radius: 12px;
            margin-bottom: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        h1 {
            font-size: 3.5rem;
            margin-bottom: 15px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        .tagline {
            font-size: 1.5rem;
            opacity: 0.9;
            margin-bottom: 20px;
        }
        
        .problem-section {
            background: rgba(30, 41, 59, 0.8);
            border-radius: 12px;
            padding: 30px;
            margin-bottom: 30px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        }
        
        h2 {
            font-size: 2.2rem;
            margin-bottom: 20px;
            color: #60a5fa;
            display: flex;
            align-items: center;
        }
        
        h2 i {
            margin-right: 15px;
        }
        
        .problem-stats {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin: 30px 0;
        }
        
        .stat {
            text-align: center;
            background: rgba(37, 99, 235, 0.2);
            padding: 20px;
            border-radius: 10px;
            width: 200px;
            margin: 10px;
            transition: transform 0.3s;
        }
        
        .stat:hover {
            transform: translateY(-5px);
        }
        
        .stat-number {
            font-size: 2.5rem;
            font-weight: bold;
            color: #60a5fa;
            margin-bottom: 10px;
        }
        
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
            margin: 30px 0;
        }
        
        .feature {
            background: rgba(30, 41, 59, 0.8);
            border-radius: 12px;
            padding: 25px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s;
        }
        
        .feature:hover {
            transform: translateY(-5px);
        }
        
        .feature i {
            font-size: 2.5rem;
            color: #7c3aed;
            margin-bottom: 20px;
        }
        
        .feature h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: #60a5fa;
        }
        
        .tech-stack {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin: 30px 0;
        }
        
        .tech {
            text-align: center;
            background: rgba(124, 58, 237, 0.2);
            padding: 20px;
            border-radius: 50%;
            width: 150px;
            height: 150px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 15px;
            transition: transform 0.3s;
        }
        
        .tech:hover {
            transform: scale(1.1);
        }
        
        .tech i {
            font-size: 2.5rem;
            margin-bottom: 15px;
            color: #7c3aed;
        }
        
        .demo {
            text-align: center;
            padding: 40px;
            background: rgba(30, 41, 59, 0.8);
            border-radius: 12px;
            margin: 30px 0;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        }
        
        .screenshot {
            max-width: 100%;
            border-radius: 10px;
            margin: 20px 0;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            border: 2px solid #7c3aed;
        }
        
        .team {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin: 30px 0;
        }
        
        .member {
            text-align: center;
            background: rgba(37, 99, 235, 0.2);
            padding: 20px;
            border-radius: 10px;
            width: 200px;
            margin: 15px;
            transition: transform 0.3s;
        }
        
        .member:hover {
            transform: translateY(-5px);
        }
        
        .member img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 15px;
            border: 3px solid #7c3aed;
        }
        
        .roadmap {
            display: flex;
            flex-direction: column;
            margin: 30px 0;
        }
        
        .milestone {
            display: flex;
            margin-bottom: 30px;
            align-items: flex-start;
        }
        
        .milestone-icon {
            font-size: 2rem;
            color: #7c3aed;
            margin-right: 20px;
        }
        
        .milestone-content {
            background: rgba(30, 41, 59, 0.8);
            padding: 20px;
            border-radius: 10px;
            flex: 1;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        footer {
            text-align: center;
            padding: 30px 0;
            margin-top: 50px;
            background: linear-gradient(90deg, #2563eb 0%, #7c3aed 100%);
            border-radius: 12px;
        }
        
        .cta-button {
            display: inline-block;
            background: #10b981;
            color: white;
            padding: 15px 40px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: bold;
            font-size: 1.2rem;
            margin-top: 20px;
            transition: all 0.3s;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .cta-button:hover {
            background: #059669;
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
        }
        
        @media (max-width: 768px) {
            h1 {
                font-size: 2.5rem;
            }
            
            .tagline {
                font-size: 1.2rem;
            }
            
            .features {
                grid-template-columns: 1fr;
            }
            
            .tech-stack {
                flex-direction: column;
                align-items: center;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>FreeLancePay</h1>
            <p class="tagline">Web3-powered secure payments for the gig economy</p>
            <p>Revolutionizing freelancer payments with blockchain and AI</p>
        </header>
        
        <section class="problem-section">
            <h2><i class="fas fa-exclamation-circle"></i> The Problem</h2>
            <p>Freelancers in India face significant challenges in receiving timely and fair payments for their work. Traditional payment systems are plagued with:</p>
            
            <div class="problem-stats">
                <div class="stat">
                    <div class="stat-number">67%</div>
                    <div class="stat-desc">Face delayed payments</div>
                </div>
                <div class="stat">
                    <div class="stat-number">42%</div>
                    <div class="stat-desc">Experience payment disputes</div>
                </div>
                <div class="stat">
                    <div class="stat-number">15-30%</div>
                    <div class="stat-desc">Lost to transaction fees</div>
                </div>
            </div>
            
            <p>These issues create financial instability for freelancers and hinder the growth of India's gig economy, which is expected to reach 90 million workers by 2030.</p>
        </section>
        
        <section>
            <h2><i class="fas fa-lightbulb"></i> Our Solution</h2>
            <p>FreeLancePay is a Web3-based platform that leverages blockchain technology and AI to create a fair, transparent, and efficient payment system for freelancers and clients.</p>
            
            <div class="features">
                <div class="feature">
                    <i class="fas fa-file-contract"></i>
                    <h3>AI-Powered Agreements</h3>
                    <p>Generate fair work agreements using generative AI based on project descriptions and requirements.</p>
                </div>
                <div class="feature">
                    <i class="fas fa-hand-holding-usd"></i>
                    <h3>Smart Contract Payments</h3>
                    <p>Automate payments through smart contracts that release funds upon work completion verification.</p>
                </div>
                <div class="feature">
                    <i class="fas fa-shield-alt"></i>
                    <h3>Decentralized Escrow</h3>
                    <p>Secure funds in smart contract escrow to ensure trust between freelancers and clients.</p>
                </div>
                <div class="feature">
                    <i class="fas fa-robot"></i>
                    <h3>AI Dispute Resolution</h3>
                    <p>Intelligent mediation system that analyzes disputes and suggests fair resolutions.</p>
                </div>
                <div class="feature">
                    <i class="fas fa-language"></i>
                    <h3>Multilingual Support</h3>
                    <p>Native support for multiple Indian languages to make the platform accessible to everyone.</p>
                </div>
                <div class="feature">
                    <i class="fas fa-coins"></i>
                    <h3>Crypto Payments</h3>
                    <p>Support for cryptocurrency payments to reduce transaction fees and enable global transactions.</p>
                </div>
            </div>
        </section>
        
        <section>
            <h2><i class="fas fa-code"></i> Technology Stack</h2>
            <div class="tech-stack">
                <div class="tech">
                    <i class="fab fa-ethereum"></i>
                    <div>Ethereum</div>
                </div>
                <div class="tech">
                    <i class="fas fa-cube"></i>
                    <div>Solidity</div>
                </div>
                <div class="tech">
                    <i class="fab fa-react"></i>
                    <div>React</div>
                </div>
                <div class="tech">
                    <i class="fas fa-brain"></i>
                    <div>AI/ML</div>
                </div>
                <div class="tech">
                    <i class="fas fa-server"></i>
                    <div>IPFS</div>
                </div>
            </div>
        </section>
        
        <section class="demo">
            <h2><i class="fas fa-desktop"></i> Platform Demo</h2>
            <p>Here's a preview of our working prototype:</p>
            
            <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="FreeLancePay Dashboard" class="screenshot">
            
            <p>The platform features a clean, intuitive interface with dashboard analytics, contract management, and secure payment processing.</p>
            
            <a href="#" class="cta-button">Live Demo</a>
        </section>
        
        <section>
            <h2><i class="fas fa-road"></i> Development Roadmap</h2>
            <div class="roadmap">
                <div class="milestone">
                    <div class="milestone-icon">
                        <i class="fas fa-flag"></i>
                    </div>
                    <div class="milestone-content">
                        <h3>Q3 2023 - MVP Development</h3>
                        <p>Core platform development with smart contract integration and basic AI agreement generation</p>
                    </div>
                </div>
                <div class="milestone">
                    <div class="milestone-icon">
                        <i class="fas fa-rocket"></i>
                    </div>
                    <div class="milestone-content">
                        <h3>Q4 2023 - Beta Launch</h3>
                        <p>Limited beta release with select freelancers and clients for testing and feedback</p>
                    </div>
                </div>
                <div class="milestone">
                    <div class="milestone-icon">
                        <i class="fas fa-language"></i>
                    </div>
                    <div class="milestone-content">
                        <h3>Q1 2024 - Multilingual Support</h3>
                        <p>Implementation of Hindi and other regional language support</p>
                    </div>
                </div>
                <div class="milestone">
                    <div class="milestone-icon">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="milestone-content">
                        <h3>Q2 2024 - Advanced AI Features</h3>
                        <p>AI dispute resolution and platform integration features</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section>
            <h2><i class="fas fa-users"></i> Our Team</h2>
            <div class="team">
                <div class="member">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Team Member">
                    <h3>Rahul Sharma</h3>
                    <p>Blockchain Developer</p>
                </div>
                <div class="member">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" alt="Team Member">
                    <h3>Priya Patel</h3>
                    <p>Full-Stack Developer</p>
                </div>
                <div class="member">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Team Member">
                    <h3>Arjun Singh</h3>
                    <p>AI/ML Engineer</p>
                </div>
                <div class="member">
                    <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Team Member">
                    <h3>Neha Gupta</h3>
                    <p>UI/UX Designer</p>
                </div>
            </div>
        </section>
        
        <footer>
            <h2>Ready to Revolutionize Freelancer Payments?</h2>
            <p>Join us in building the future of work in the gig economy</p>
            <a href="#" class="cta-button">Select Our Team</a>
        </footer>
    </div>

    <script>
        // Simple animation for elements when they come into view
        document.addEventListener('DOMContentLoaded', function() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            // Observe all sections and features
            document.querySelectorAll('section, .feature, .stat, .tech, .member, .milestone-content').forEach(el => {
                el.style.opacity = 0;
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(el);
            });
        });
    </script>
</body>
</html>
