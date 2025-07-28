import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { ScrollArea } from '@/components/ui/scroll-area.jsx'
import { 
  Building2, 
  Target, 
  Cpu, 
  Users, 
  FileText, 
  CheckCircle, 
  TrendingUp,
  Shield,
  Network,
  Zap,
  Globe,
  Award,
  BookOpen,
  MessageSquare
} from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('overview')

  const navigationItems = [
    { id: 'overview', label: 'Executive Summary', icon: FileText },
    { id: 'company', label: 'Company Research', icon: Building2 },
    { id: 'technical', label: 'Technical Knowledge', icon: Cpu },
    { id: 'competitive', label: 'Competitive Analysis', icon: Target },
    { id: 'interview', label: 'Interview Guide', icon: MessageSquare },
  ]

  const keyStats = [
    { label: 'Market Valuation', value: '$900M', icon: TrendingUp },
    { label: 'Customer Satisfaction', value: '98%', icon: Award },
    { label: 'Market Growth (CAGR)', value: '16.5%', icon: TrendingUp },
    { label: 'Performance Scale', value: '35+ Gbps', icon: Zap },
  ]

  const competitiveAdvantages = [
    'Open Source Foundation',
    'Evidence-Based Approach', 
    'Gartner Magic Quadrant Leader',
    'Enterprise-Grade Performance',
    'Comprehensive Integration Ecosystem'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Corelight Interview Prep
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Senior Sales Engineer Position
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              <CheckCircle className="w-4 h-4 mr-1" />
              Ready for Interview
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Navigation</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  {navigationItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full flex items-center px-4 py-3 text-left text-sm font-medium rounded-none transition-colors ${
                          activeSection === item.id
                            ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700 dark:bg-blue-900/20 dark:text-blue-300'
                            : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                        }`}
                      >
                        <Icon className="w-4 h-4 mr-3" />
                        {item.label}
                      </button>
                    )
                  })}
                </nav>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Key Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {keyStats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </span>
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {stat.value}
                      </span>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeSection === 'overview' && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="w-5 h-5" />
                      <span>Executive Summary</span>
                    </CardTitle>
                    <CardDescription>
                      Your comprehensive preparation overview for the Senior Sales Engineer role at Corelight
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Company Highlights</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm">2025 Gartner Magic Quadrant Leader</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm">$900M valuation, Series E company</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm">98% customer recommendation rate</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm">Only open-source NDR platform</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Market Position</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <TrendingUp className="w-4 h-4 text-blue-600" />
                            <span className="text-sm">NDR market: $1.2B → $4.5B by 2032</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Network className="w-4 h-4 text-blue-600" />
                            <span className="text-sm">Fastest-growing NDR platform</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Globe className="w-4 h-4 text-blue-600" />
                            <span className="text-sm">Enterprise & government customers</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Zap className="w-4 h-4 text-blue-600" />
                            <span className="text-sm">Proven 35+ Gbps performance</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-3">Competitive Advantages</h3>
                      <div className="flex flex-wrap gap-2">
                        {competitiveAdvantages.map((advantage, index) => (
                          <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            {advantage}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2 text-blue-900 dark:text-blue-100">
                        Interview Success Strategy
                      </h3>
                      <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
                        Position yourself as a technical expert who understands both the technology depth and business value of Corelight's evidence-based NDR approach. Emphasize the unique advantages of open-source transparency, community innovation, and proven enterprise performance.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Customer Success Stories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div className="text-2xl font-bold text-green-700 dark:text-green-300">20x</div>
                        <div className="text-sm text-green-600 dark:text-green-400">Faster Incident Response</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Education First</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">80%</div>
                        <div className="text-sm text-blue-600 dark:text-blue-400">Time Reduction</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Federal Agency</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">35+</div>
                        <div className="text-sm text-purple-600 dark:text-purple-400">Gbps Performance</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Research University</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === 'company' && (
              <CompanyResearch />
            )}

            {activeSection === 'technical' && (
              <TechnicalKnowledge />
            )}

            {activeSection === 'competitive' && (
              <CompetitiveAnalysis />
            )}

            {activeSection === 'interview' && (
              <InterviewGuide />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Company Research Component
function CompanyResearch() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Building2 className="w-5 h-5" />
            <span>Company Research & Background</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
              <TabsTrigger value="funding">Funding</TabsTrigger>
              <TabsTrigger value="culture">Culture</TabsTrigger>
            </TabsList>
            
            <TabsContent value="history" className="space-y-4">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">25+ Year Journey</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="font-medium">Origins at Lawrence Berkeley National Laboratory</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Dr. Vern Paxson created Zeek (formerly Bro) to understand network activity
                    </div>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="font-medium">2013: Company Founded</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Vern Paxson, Robin Sommer, and Seth Hall founded the company
                    </div>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="font-medium">2024: Series E Funding</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      $150M Series E led by Accel, $900M valuation
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="leadership" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <div className="font-medium">Brian Dye</div>
                  <div className="text-sm text-blue-600">CEO</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Appointed 2020, leading growth strategy
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="font-medium">Dr. Vern Paxson</div>
                  <div className="text-sm text-blue-600">Co-founder & Chief Scientist</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    UC Berkeley Professor, Zeek creator
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="font-medium">Robin Sommer</div>
                  <div className="text-sm text-blue-600">Co-founder & CTO</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    International Computer Science Institute
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="font-medium">Michele Bettencourt</div>
                  <div className="text-sm text-blue-600">Executive Chairwoman</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Strategic leadership and governance
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="funding" className="space-y-4">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">$150M</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Series E (2024)</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-700 dark:text-green-300">$900M</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Valuation</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">$9.2M</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Series A (2017)</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Key Investors</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Accel Partners (Lead)</Badge>
                    <Badge variant="outline">Cisco Investments</Badge>
                    <Badge variant="outline">CrowdStrike</Badge>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="culture" className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Mission</h4>
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    "We put evidence at the heart of security"
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Core Values</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Strong shared culture and collaboration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Diversity of background and thought</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Community-driven innovation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Geographically distributed team</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

// Technical Knowledge Component
function TechnicalKnowledge() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Cpu className="w-5 h-5" />
            <span>Technical Knowledge Base</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="architecture" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="architecture">Architecture</TabsTrigger>
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="deployment">Deployment</TabsTrigger>
              <TabsTrigger value="integration">Integration</TabsTrigger>
            </TabsList>
            
            <TabsContent value="architecture" className="space-y-4">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Core Technology Foundation</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="font-medium text-blue-600">Zeek</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Network security monitor and protocol analyzer
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="font-medium text-green-600">Suricata</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Intrusion detection and prevention system
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="font-medium text-purple-600">YARA</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Pattern matching engine for malware detection
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Four-Layer Architecture</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <div className="font-medium">Sensors Layer</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Traffic collection and processing</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <div className="font-medium">Evidence Layer</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Forensic-quality network evidence</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <div className="font-medium">Analytics Layer</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">ML, behavioral analytics, signatures</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                      <div>
                        <div className="font-medium">Automation Layer</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">AI-assisted workflows and response</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="components" className="space-y-4">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="font-medium text-blue-600 mb-2">Smart PCAP</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Intelligent packet capture with trigger-based rules for efficient storage and forensic analysis
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="font-medium text-green-600 mb-2">Encrypted Traffic Analysis</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Visibility into encrypted communications without decryption
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="font-medium text-purple-600 mb-2">AI-Powered Analytics</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Machine learning and LLM integration for guided analysis
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="font-medium text-orange-600 mb-2">Fleet Manager</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Centralized management for distributed sensor deployments
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="deployment" className="space-y-4">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Deployment Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="font-medium mb-2">Physical Appliances</div>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Maximum performance (multi-Tbps)</li>
                      <li>• Dedicated hardware</li>
                      <li>• Enterprise data centers</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="font-medium mb-2">Virtual Sensors</div>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• VMware, Hyper-V, KVM</li>
                      <li>• Existing infrastructure</li>
                      <li>• Rapid deployment</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="font-medium mb-2">Cloud Native</div>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• AWS, Azure, GCP</li>
                      <li>• Auto-scaling</li>
                      <li>• Cloud-first architectures</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="font-medium mb-2">Container Deployments</div>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Docker, Kubernetes</li>
                      <li>• Microservices integration</li>
                      <li>• DevOps workflows</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="integration" className="space-y-4">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Integration Ecosystem</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">SIEM Platforms</h4>
                    <div className="space-y-1">
                      <Badge variant="outline" className="block w-fit">Splunk</Badge>
                      <Badge variant="outline" className="block w-fit">Microsoft Sentinel</Badge>
                      <Badge variant="outline" className="block w-fit">IBM QRadar</Badge>
                      <Badge variant="outline" className="block w-fit">Elastic Stack</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">XDR Solutions</h4>
                    <div className="space-y-1">
                      <Badge variant="outline" className="block w-fit">CrowdStrike Falcon</Badge>
                      <Badge variant="outline" className="block w-fit">Microsoft Defender</Badge>
                      <Badge variant="outline" className="block w-fit">Palo Alto Cortex</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Cloud Platforms</h4>
                    <div className="space-y-1">
                      <Badge variant="outline" className="block w-fit">AWS Security Hub</Badge>
                      <Badge variant="outline" className="block w-fit">Azure Security Center</Badge>
                      <Badge variant="outline" className="block w-fit">GCP Security Command</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

// Competitive Analysis Component
function CompetitiveAnalysis() {
  const competitors = [
    {
      name: 'Darktrace',
      position: 'AI-powered cybersecurity',
      marketShare: '23.6%',
      strengths: ['Strong brand recognition', 'AI technology', 'Autonomous response'],
      weaknesses: ['Black-box approach', 'Limited transparency', 'Vendor lock-in'],
      positioning: 'Evidence-based transparency vs. black-box AI'
    },
    {
      name: 'ExtraHop',
      position: 'Cloud-native NDR',
      marketShare: '2nd highest revenue',
      strengths: ['Cloud-scale ML', 'Enterprise customers', 'Gartner Leader'],
      weaknesses: ['Proprietary platform', 'Limited customization', 'Vendor lock-in'],
      positioning: 'Open source community vs. proprietary approach'
    },
    {
      name: 'Vectra AI',
      position: 'AI Platform for NDR',
      marketShare: 'Gartner Leader',
      strengths: ['AI algorithms', 'Behavioral analytics', '24x7 support'],
      weaknesses: ['Analytics-focused', 'Limited evidence depth', 'Proprietary AI'],
      positioning: 'Comprehensive evidence vs. analytics-focused alerts'
    }
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="w-5 h-5" />
            <span>Competitive Analysis</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">$4.5B</div>
                <div className="text-sm text-blue-600 dark:text-blue-400">Market Size by 2032</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-2xl font-bold text-green-700 dark:text-green-300">16.5%</div>
                <div className="text-sm text-green-600 dark:text-green-400">CAGR Growth Rate</div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">Leader</div>
                <div className="text-sm text-purple-600 dark:text-purple-400">Gartner Magic Quadrant</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Major Competitors</h3>
              {competitors.map((competitor, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium text-lg">{competitor.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{competitor.position}</p>
                    </div>
                    <Badge variant="secondary">{competitor.marketShare}</Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-green-600 mb-1">Strengths</div>
                      <ul className="space-y-1">
                        {competitor.strengths.map((strength, i) => (
                          <li key={i} className="text-gray-600 dark:text-gray-400">• {strength}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-red-600 mb-1">Weaknesses</div>
                      <ul className="space-y-1">
                        {competitor.weaknesses.map((weakness, i) => (
                          <li key={i} className="text-gray-600 dark:text-gray-400">• {weakness}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-blue-600 mb-1">Our Positioning</div>
                      <p className="text-gray-600 dark:text-gray-400">{competitor.positioning}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-green-900 dark:text-green-100">
                Corelight's Unique Advantages
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Only open-source NDR platform</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Evidence-based approach</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Community-driven innovation</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Comprehensive integration ecosystem</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Proven enterprise performance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">98% customer satisfaction</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Interview Guide Component
function InterviewGuide() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5" />
            <span>Interview Preparation Guide</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="strategy" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="strategy">Strategy</TabsTrigger>
              <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
              <TabsTrigger value="questions">Questions</TabsTrigger>
              <TabsTrigger value="tips">Success Tips</TabsTrigger>
            </TabsList>
            
            <TabsContent value="strategy" className="space-y-4">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Key Talking Points</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium text-blue-600 mb-2">Technical Differentiators</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Multi-layered detection (Signatures + ML + Behavioral)</li>
                      <li>• Smart PCAP with intelligent triggers</li>
                      <li>• Encrypted traffic analysis capabilities</li>
                      <li>• Open architecture for customization</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium text-green-600 mb-2">Business Value Props</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 20x faster incident response (proven)</li>
                      <li>• 80% reduction in investigation time</li>
                      <li>• Enterprise scale (35+ Gbps)</li>
                      <li>• 98% customer satisfaction rate</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                    Positioning Against Competitors
                  </h4>
                  <div className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <p><strong>vs. Darktrace:</strong> Evidence-based transparency vs. black-box AI</p>
                    <p><strong>vs. ExtraHop:</strong> Open source community vs. proprietary platform</p>
                    <p><strong>vs. Vectra:</strong> Comprehensive evidence vs. analytics-focused alerts</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="scenarios" className="space-y-4">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Customer Success Scenarios</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-green-600 mb-2">Education First - Global Enterprise</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Challenge:</strong> 40,000 employees, slow incident response (hours)</p>
                      <p><strong>Solution:</strong> Corelight sensors across global infrastructure</p>
                      <p><strong>Result:</strong> 20x faster response (hours → minutes)</p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-blue-600 mb-2">Federal Agency - SOC Foundation</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Challenge:</strong> 20 minutes manual data aggregation per event</p>
                      <p><strong>Solution:</strong> Corelight + Splunk for east-west monitoring</p>
                      <p><strong>Result:</strong> 80% reduction in response time</p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-purple-600 mb-2">Research University - High Performance</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Challenge:</strong> 35+ Gbps traffic, custom detection needs</p>
                      <p><strong>Solution:</strong> Enterprise Zeek with rich metadata</p>
                      <p><strong>Result:</strong> Custom detection scripts enabled</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="questions" className="space-y-4">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Questions to Ask Interviewers</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-blue-600 mb-2">Company Strategy</h4>
                    <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• How does Corelight plan to leverage its Gartner Leader recognition?</li>
                      <li>• What are the key strategic initiatives for market expansion?</li>
                      <li>• How does the open-source community influence product development?</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-green-600 mb-2">Role-Specific</h4>
                    <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• What are the most common technical objections Sales Engineers encounter?</li>
                      <li>• How does Corelight support Sales Engineers in staying current with threats?</li>
                      <li>• What types of customers and use cases are most common?</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-purple-600 mb-2">Team & Culture</h4>
                    <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• How do Sales Engineers collaborate with Product and Customer Success?</li>
                      <li>• What professional development opportunities are available?</li>
                      <li>• How does Corelight measure Sales Engineering success?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="tips" className="space-y-4">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Interview Success Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                      <h4 className="font-medium text-green-700 dark:text-green-300 mb-1">Before Interview</h4>
                      <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                        <li>• Review latest company developments</li>
                        <li>• Practice technical explanations</li>
                        <li>• Prepare STAR method examples</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                      <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-1">During Interview</h4>
                      <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                        <li>• Show technical depth and business acumen</li>
                        <li>• Ask thoughtful questions</li>
                        <li>• Emphasize customer focus</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
                      <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-1">Key Competencies</h4>
                      <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                        <li>• Technical credibility</li>
                        <li>• Consultative selling approach</li>
                        <li>• Competitive positioning</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded">
                      <h4 className="font-medium text-orange-700 dark:text-orange-300 mb-1">Follow-up</h4>
                      <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                        <li>• Send thoughtful thank-you notes</li>
                        <li>• Reference specific conversation points</li>
                        <li>• Stay engaged with company content</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-4 rounded-lg">
                  <h4 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">
                    🎯 Success Formula
                  </h4>
                  <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                    Technical Expertise + Business Acumen + Customer Focus + Competitive Awareness = Interview Success
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

export default App

