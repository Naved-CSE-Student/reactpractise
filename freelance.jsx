import React, { useState, useEffect } from 'react';
import { Calendar, Users, FileText, Wallet, CheckCircle, AlertCircle, Globe, MessageCircle } from 'lucide-react';

const FreelancerPaymentSystem = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userType, setUserType] = useState('freelancer'); // 'freelancer' or 'client'
  const [language, setLanguage] = useState('english');
  const [wallet, setWallet] = useState(null);
  const [contracts, setContracts] = useState([
    {
      id: 1,
      title: "Website Development",
      client: "TechCorp Ltd",
      freelancer: "Rajesh Kumar",
      amount: 500,
      currency: "USDC",
      status: "in_progress",
      milestones: [
        { id: 1, description: "UI Design", amount: 200, completed: true },
        { id: 2, description: "Backend Development", amount: 200, completed: false },
        { id: 3, description: "Testing & Deployment", amount: 100, completed: false }
      ],
      deadline: "2024-10-15",
      agreement: "Complete website development with responsive design and backend API integration."
    },
    {
      id: 2,
      title: "Mobile App UI",
      client: "StartupXYZ",
      freelancer: "Priya Sharma",
      amount: 300,
      currency: "ETH",
      status: "completed",
      milestones: [
        { id: 1, description: "Wireframes", amount: 100, completed: true },
        { id: 2, description: "UI Design", amount: 200, completed: true }
      ],
      deadline: "2024-09-30",
      agreement: "Design modern mobile app UI with user-friendly interface and smooth navigation."
    }
  ]);

  const [disputes, setDisputes] = useState([
    {
      id: 1,
      contractId: 1,
      title: "Scope Change Dispute",
      status: "pending",
      aiSuggestion: "Based on the original agreement, the additional features requested are outside the initial scope. Recommended resolution: Create an addendum contract for additional work worth $150."
    }
  ]);

  const [newContract, setNewContract] = useState({
    title: '',
    description: '',
    budget: '',
    deadline: '',
    currency: 'USDC'
  });

  // Simulated AI contract generation
  const generateAgreement = (description, budget, deadline) => {
    const templates = {
      development: `This agreement covers ${description}. The freelancer will deliver the completed work by ${deadline} for ${budget} tokens. Work includes all specified features with 2 rounds of revisions. Payment will be released upon client approval.`,
      design: `Design project for ${description}. Freelancer will provide high-quality designs by ${deadline} for ${budget} tokens. Includes initial concepts, revisions, and final files. Payment released on approval.`,
      content: `Content creation for ${description}. Delivery by ${deadline} for ${budget} tokens. Includes research, writing, and editing. Payment upon satisfactory completion.`
    };

    const keywords = description.toLowerCase();
    if (keywords.includes('website') || keywords.includes('app') || keywords.includes('development')) {
      return templates.development;
    } else if (keywords.includes('design') || keywords.includes('ui') || keywords.includes('logo')) {
      return templates.design;
    } else {
      return templates.content;
    }
  };

  // Language translations
  const translations = {
    english: {
      dashboard: "Dashboard",
      contracts: "Smart Contracts",
      payments: "Payments",
      disputes: "Disputes",
      wallet: "Wallet",
      connectWallet: "Connect Wallet",
      walletConnected: "Wallet Connected",
      activeContracts: "Active Contracts",
      totalEarnings: "Total Earnings",
      pendingPayments: "Pending Payments",
      createContract: "Create New Contract",
      projectTitle: "Project Title",
      projectDescription: "Project Description",
      budget: "Budget",
      deadline: "Deadline",
      currency: "Currency",
      generateAgreement: "Generate AI Agreement",
      submitContract: "Submit Contract",
      milestones: "Milestones",
      completed: "Completed",
      pending: "Pending",
      inProgress: "In Progress",
      releasePayment: "Release Payment",
      raiseDispute: "Raise Dispute",
      aiSuggestion: "AI Suggestion"
    },
    hindi: {
      dashboard: "डैशबोर्ड",
      contracts: "स्मार्ट कॉन्ट्रैक्ट्स",
      payments: "पेमेंट्स",
      disputes: "विवाद",
      wallet: "वॉलेट",
      connectWallet: "वॉलेट कनेक्ट करें",
      walletConnected: "वॉलेट कनेक्ट हो गया",
      activeContracts: "सक्रिय कॉन्ट्रैक्ट्स",
      totalEarnings: "कुल कमाई",
      pendingPayments: "लंबित भुगतान",
      createContract: "नया कॉन्ट्रैक्ट बनाएं",
      projectTitle: "प्रोजेक्ट का शीर्षक",
      projectDescription: "प्रोजेक्ट विवरण",
      budget: "बजट",
      deadline: "अंतिम तिथि",
      currency: "मुद्रा",
      generateAgreement: "AI समझौता बनाएं",
      submitContract: "कॉन्ट्रैक्ट जमा करें",
      milestones: "मील के पत्थर",
      completed: "पूर्ण",
      pending: "लंबित",
      inProgress: "प्रगति में",
      releasePayment: "भुगतान जारी करें",
      raiseDispute: "विवाद उठाएं",
      aiSuggestion: "AI सुझाव"
    }
  };

  const t = translations[language];

  // Simulated wallet connection
  const connectWallet = () => {
    // In real implementation, this would connect to MetaMask or other Web3 wallets
    setWallet({
      address: "0x742d35Cc6634C0532925a3b8D09c6e08d593a2dC",
      balance: { ETH: 2.5, USDC: 1250 }
    });
  };

  const releasePayment = (contractId, milestoneId) => {
    setContracts(prevContracts => 
      prevContracts.map(contract => {
        if (contract.id === contractId) {
          return {
            ...contract,
            milestones: contract.milestones.map(milestone => 
              milestone.id === milestoneId ? { ...milestone, completed: true } : milestone
            )
          };
        }
        return contract;
      })
    );
  };

  const createNewContract = () => {
    if (!newContract.title || !newContract.description || !newContract.budget) return;

    const agreement = generateAgreement(newContract.description, newContract.budget, newContract.deadline);
    
    const contract = {
      id: contracts.length + 1,
      title: newContract.title,
      client: userType === 'client' ? 'You' : 'New Client',
      freelancer: userType === 'freelancer' ? 'You' : 'Selected Freelancer',
      amount: parseFloat(newContract.budget),
      currency: newContract.currency,
      status: 'pending_approval',
      milestones: [
        { id: 1, description: "Project Completion", amount: parseFloat(newContract.budget), completed: false }
      ],
      deadline: newContract.deadline,
      agreement: agreement
    };

    setContracts([...contracts, contract]);
    setNewContract({ title: '', description: '', budget: '', deadline: '', currency: 'USDC' });
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">{t.activeContracts}</p>
              <p className="text-3xl font-bold">{contracts.filter(c => c.status !== 'completed').length}</p>
            </div>
            <FileText className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">{t.totalEarnings}</p>
              <p className="text-3xl font-bold">$2,450</p>
            </div>
            <Wallet className="w-8 h-8 text-green-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100">{t.pendingPayments}</p>
              <p className="text-3xl font-bold">$500</p>
            </div>
            <AlertCircle className="w-8 h-8 text-yellow-200" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {contracts.slice(0, 3).map(contract => (
            <div key={contract.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium">{contract.title}</h4>
                <p className="text-sm text-gray-600">{contract.client}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs ${
                  contract.status === 'completed' ? 'bg-green-100 text-green-800' :
                  contract.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {contract.status.replace('_', ' ')}
                </span>
                <span className="font-semibold">{contract.amount} {contract.currency}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContracts = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{t.contracts}</h2>
        <button
          onClick={() => setActiveTab('create-contract')}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {t.createContract}
        </button>
      </div>

      <div className="grid gap-6">
        {contracts.map(contract => (
          <div key={contract.id} className="bg-white p-6 rounded-lg border">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{contract.title}</h3>
                <p className="text-gray-600">{contract.client} → {contract.freelancer}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">{contract.amount} {contract.currency}</p>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  contract.status === 'completed' ? 'bg-green-100 text-green-800' :
                  contract.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {t[contract.status] || contract.status.replace('_', ' ')}
                </span>
              </div>
            </div>

            <div className="mb-4 p-3 bg-gray-50 rounded">
              <h4 className="font-medium mb-2">Agreement:</h4>
              <p className="text-sm text-gray-700">{contract.agreement}</p>
            </div>

            <div>
              <h4 className="font-medium mb-2">{t.milestones}:</h4>
              <div className="space-y-2">
                {contract.milestones.map(milestone => (
                  <div key={milestone.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className={`w-5 h-5 ${milestone.completed ? 'text-green-600' : 'text-gray-400'}`} />
                      <span className={milestone.completed ? 'line-through text-gray-500' : ''}>{milestone.description}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="font-medium">{milestone.amount} {contract.currency}</span>
                      {!milestone.completed && userType === 'client' && (
                        <button
                          onClick={() => releasePayment(contract.id, milestone.id)}
                          className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                        >
                          {t.releasePayment}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex space-x-3">
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-sm">
                {t.raiseDispute}
              </button>
              <span className="text-sm text-gray-500 flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Deadline: {contract.deadline}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCreateContract = () => (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">{t.createContract}</h2>
      <div className="bg-white p-6 rounded-lg border space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t.projectTitle}</label>
          <input
            type="text"
            value={newContract.title}
            onChange={(e) => setNewContract({...newContract, title: e.target.value})}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter project title..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t.projectDescription}</label>
          <textarea
            value={newContract.description}
            onChange={(e) => setNewContract({...newContract, description: e.target.value})}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            placeholder="Describe the project requirements..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.budget}</label>
            <input
              type="number"
              value={newContract.budget}
              onChange={(e) => setNewContract({...newContract, budget: e.target.value})}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.currency}</label>
            <select
              value={newContract.currency}
              onChange={(e) => setNewContract({...newContract, currency: e.target.value})}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="USDC">USDC</option>
              <option value="ETH">ETH</option>
              <option value="DAI">DAI</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.deadline}</label>
            <input
              type="date"
              value={newContract.deadline}
              onChange={(e) => setNewContract({...newContract, deadline: e.target.value})}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {newContract.description && (
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">AI Generated Agreement Preview:</h4>
            <p className="text-sm text-blue-800">
              {generateAgreement(newContract.description, newContract.budget, newContract.deadline)}
            </p>
          </div>
        )}

        <div className="flex space-x-4">
          <button
            onClick={createNewContract}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            {t.submitContract}
          </button>
          <button
            onClick={() => setActiveTab('contracts')}
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  const renderDisputes = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{t.disputes}</h2>
      
      {disputes.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">No Active Disputes</h3>
          <p className="text-gray-500">All your contracts are running smoothly!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {disputes.map(dispute => (
            <div key={dispute.id} className="bg-white p-6 rounded-lg border">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{dispute.title}</h3>
                  <p className="text-gray-600">Contract ID: {dispute.contractId}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                  {dispute.status}
                </span>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">{t.aiSuggestion}:</h4>
                <p className="text-sm text-blue-800">{dispute.aiSuggestion}</p>
              </div>
              
              <div className="mt-4 flex space-x-3">
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors text-sm">
                  Accept AI Resolution
                </button>
                <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors text-sm">
                  Request Human Mediator
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-blue-600">FreelancePay</h1>
              <div className="flex space-x-1">
                <button
                  onClick={() => setUserType('freelancer')}
                  className={`px-3 py-1 rounded-full text-xs transition-colors ${
                    userType === 'freelancer' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Freelancer
                </button>
                <button
                  onClick={() => setUserType('client')}
                  className={`px-3 py-1 rounded-full text-xs transition-colors ${
                    userType === 'client' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Client
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="px-3 py-1 border rounded-lg text-sm"
              >
                <option value="english">English</option>
                <option value="hindi">हिंदी</option>
              </select>
              
              {/* Wallet Connection */}
              {wallet ? (
                <div className="flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-800 rounded-lg text-sm">
                  <Wallet className="w-4 h-4" />
                  <span>{t.walletConnected}</span>
                  <span className="font-mono">{wallet.address.slice(0, 6)}...{wallet.address.slice(-4)}</span>
                </div>
              ) : (
                <button
                  onClick={connectWallet}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Wallet className="w-4 h-4" />
                  <span>{t.connectWallet}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex">
          {/* Sidebar */}
          <nav className="w-64 mr-8">
            <div className="bg-white rounded-lg border p-4">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeTab === 'dashboard' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'
                    }`}
                  >
                    {t.dashboard}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('contracts')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeTab === 'contracts' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'
                    }`}
                  >
                    {t.contracts}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('disputes')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeTab === 'disputes' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'
                    }`}
                  >
                    {t.disputes}
                  </button>
                </li>
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1">
            {activeTab === 'dashboard' && renderDashboard()}
            {activeTab === 'contracts' && renderContracts()}
            {activeTab === 'create-contract' && renderCreateContract()}
            {activeTab === 'disputes' && renderDisputes()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default FreelancerPaymentSystem;
