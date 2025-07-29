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
  MessageSquare,
  BarChart3,
  Star,
  Lightbulb,
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  ChevronRight,
  ExternalLink
} from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('overview')

  const navigationItems = [
    { id: 'overview', label: 'Executive Summary', icon: FileText },
    { id: 'company', label: 'Company Research', icon: Building2 },
    { id: 'technical', label: 'Technical Knowledge', icon: Cpu },
    { id: 'competitive', label: 'Competitive Analysis', icon: Target },
    { id: 'casestudies', label: 'Case Studies', icon: BarChart3 },
    { id: 'customers', label: 'Customer Base', icon: Users },
    { id: 'strategic', label: 'Strategic Q&A', icon: Lightbulb },
    { id: 'interview', label: 'Interview Guide', icon: MessageSquare },
  ]

  const keyStats = [
    { label: 'Market Valuation', value: '$900M', icon: TrendingUp },
    { label: 'Customer Satisfaction', value: '98%', icon: Award },
    { label: 'Gartner Leader', value: '2025', icon: Star },
    { label: 'Performance Scale', value: '35+ Gbps', icon: Zap },
    { label: 'Response Improvement', value: '95%', icon: Clock },
    { label: 'Market Growth', value: '16.5%', icon: BarChart3 },
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

            {activeSection === 'casestudies' && (
              <CaseStudies />
            )}

            {activeSection === 'customers' && (
              <CustomerBase />
            )}

            {activeSection === 'strategic' && (
              <StrategicQA />
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

// Case Studies Component
function CaseStudies() {
  const caseStudies = [
    {
      title: "Education First - 95% Reduction in Incident Response Time",
      company: "Education First",
      industry: "Education Services",
      employees: "40,000+",
      improvement: "95%",
      metric: "Incident Response Time",
      before: "3 hours average",
      after: "<10 minutes average",
      challenge: "Manual data aggregation, scattered network logs, inefficient investigation",
      solution: "Corelight Sensors with SIEM integration, centralized network evidence",
      quote: "Before Corelight that task was very inefficient and in some cases impossible",
      color: "green"
    },
    {
      title: "DoD Performance Study - Enterprise-Scale Validation",
      company: "U.S. Department of Defense",
      industry: "Government",
      employees: "Mission-critical",
      improvement: "30,000 CPS",
      metric: "Processing Capability",
      before: "25% packet loss (open-source)",
      after: "<2% packet loss (Corelight)",
      challenge: "High-volume traffic processing, mission-critical reliability requirements",
      solution: "Corelight AP 1000 Sensor with enterprise-grade performance",
      quote: "Results demonstrated superior performance at government scale",
      color: "blue"
    },
    {
      title: "Energy Company SMB Investigation - Critical Incident Resolution",
      company: "Major Energy Company",
      industry: "Energy",
      employees: "Global enterprise",
      improvement: "Minutes",
      metric: "Investigation Time",
      before: "Hours/days for forensic analysis",
      after: "Minutes using Zeek file ID",
      challenge: "Unauthorized SMB file access during holiday period, limited visibility",
      solution: "Corelight network logs with rich SMB protocol analysis",
      quote: "If I didn't have this data I wouldn't sleep well at night",
      color: "orange"
    },
    {
      title: "Federal Agency DNS Analysis - 80% Time Reduction",
      company: "Federal Government Agency",
      industry: "Government",
      employees: "Federal scale",
      improvement: "80%",
      metric: "DNS Analysis Time",
      before: "20 minutes manual aggregation per event",
      after: "Automated analysis with real-time data",
      challenge: "Manual DNS data aggregation, limited east-west visibility",
      solution: "Corelight Sensor with Splunk integration for DNS monitoring",
      quote: "Full visibility into DNS data across the network",
      color: "purple"
    },
    {
      title: "Grand Canyon Education - Transparency Over Black-Box",
      company: "Grand Canyon Education",
      industry: "Higher Education",
      employees: "Academic institution",
      improvement: "Transparent",
      metric: "Detection Logic",
      before: "Black-box NDR without explanation",
      after: "Clear, actionable detection logic",
      challenge: "Lack of transparency in security alerts, slow response decisions",
      solution: "Corelight's Open NDR Platform with evidence-based approach",
      quote: "Swift, confident response decisions with clear network evidence",
      color: "indigo"
    }
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5" />
            <span>Customer Success Case Studies</span>
          </CardTitle>
          <CardDescription>
            Quantifiable results and business impact stories from Corelight implementations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-3xl font-bold text-green-700 dark:text-green-300">95%</div>
              <div className="text-sm text-green-600 dark:text-green-400">Incident Response Improvement</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Education First</div>
            </div>
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">30K</div>
              <div className="text-sm text-blue-600 dark:text-blue-400">CPS Processing</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">DoD Validation</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="text-3xl font-bold text-purple-700 dark:text-purple-300">80%</div>
              <div className="text-sm text-purple-600 dark:text-purple-400">Time Reduction</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Federal Agency</div>
            </div>
          </div>

          <div className="space-y-6">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-l-4" style={{borderLeftColor: study.color === 'green' ? '#10b981' : study.color === 'blue' ? '#3b82f6' : study.color === 'orange' ? '#f97316' : study.color === 'purple' ? '#8b5cf6' : '#6366f1'}}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{study.title}</CardTitle>
                      <CardDescription className="flex items-center space-x-4 mt-1">
                        <span>{study.company}</span>
                        <Badge variant="outline">{study.industry}</Badge>
                        <span className="text-xs">{study.employees}</span>
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold text-${study.color}-600`}>{study.improvement}</div>
                      <div className={`text-sm text-${study.color}-500`}>{study.metric}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-medium text-red-700 dark:text-red-300 mb-1">Before</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{study.before}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 dark:text-green-300 mb-1">After</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{study.after}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{study.solution}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded italic text-sm">
                    "{study.quote}"
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
            <CardHeader>
              <CardTitle className="text-blue-900 dark:text-blue-100">Interview Usage Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">For Technical Discussions:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Reference DoD's 30,000 CPS processing capability</li>
                    <li>• Mention 95% improvement in incident response</li>
                    <li>• Highlight government validation and scale</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">For Customer Scenarios:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Energy sector: Critical incident resolution</li>
                    <li>• Education: Transparency over black-box solutions</li>
                    <li>• Government: Mission-critical reliability</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}

// Customer Base Component
function CustomerBase() {
  const knownCustomers = [
    { name: "GM Financial", location: "Texas (US Central)", type: "Financial Services", award: "Best Polaris Project Partner 2022" },
    { name: "University of Texas at Austin", location: "Texas (US Central)", type: "Higher Education", award: "Best Polaris Project Partner 2021" },
    { name: "Boston Children's Hospital", location: "Massachusetts", type: "Healthcare", award: "Best Commercial Enterprise 2022" },
    { name: "Riot Games", location: "California", type: "Technology", award: "Best Early Adopter 2022" },
    { name: "University at Buffalo", location: "New York", type: "Higher Education", award: "Best Higher Education 2021" },
    { name: "Grand Canyon Education", location: "Arizona", type: "Higher Education", award: "Case Study Featured" },
  ]

  const customerSegments = [
    {
      segment: "Financial Services",
      description: "Banks, credit unions, insurance companies",
      useCases: ["Fraud detection", "Compliance monitoring", "Insider threat detection"],
      examples: "GM Financial, major banks in Texas/Illinois/Ohio"
    },
    {
      segment: "Higher Education", 
      description: "Universities, research institutions, academic networks",
      useCases: ["Research network security", "Student data protection", "Complex network monitoring"],
      examples: "UT Austin, University at Buffalo, Grand Canyon Education"
    },
    {
      segment: "Healthcare",
      description: "Hospitals, health systems, medical research",
      useCases: ["HIPAA compliance", "Medical device security", "Patient data protection"],
      examples: "Boston Children's Hospital, healthcare systems"
    },
    {
      segment: "Government",
      description: "Federal agencies, state/local government, defense",
      useCases: ["National security", "Critical infrastructure", "Compliance"],
      examples: "Department of Defense, federal agencies"
    },
    {
      segment: "Energy & Utilities",
      description: "Oil & gas, electric utilities, critical infrastructure",
      useCases: ["SCADA security", "Critical infrastructure protection", "Operational technology"],
      examples: "Major energy companies, utility providers"
    },
    {
      segment: "Technology",
      description: "Software companies, gaming, tech services",
      useCases: ["Intellectual property protection", "Development environment security", "Threat hunting"],
      examples: "Riot Games, tech companies"
    }
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5" />
            <span>Customer Base & Market Presence</span>
          </CardTitle>
          <CardDescription>
            Known customers, market segments, and US Central region prospects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="known" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="known">Known Customers</TabsTrigger>
              <TabsTrigger value="segments">Market Segments</TabsTrigger>
              <TabsTrigger value="central">US Central Focus</TabsTrigger>
            </TabsList>
            
            <TabsContent value="known" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {knownCustomers.map((customer, index) => (
                  <Card key={index} className="border-l-4 border-blue-500">
                    <CardContent className="pt-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{customer.name}</h3>
                        <Badge variant="outline" className="text-xs">{customer.type}</Badge>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <MapPin className="w-3 h-3 mr-1" />
                          {customer.location}
                        </div>
                        <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
                          <Award className="w-3 h-3 mr-1" />
                          {customer.award}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Customer Demographics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="font-medium text-blue-800 dark:text-blue-200">73.77%</div>
                    <div className="text-blue-600 dark:text-blue-400">US-based customers</div>
                  </div>
                  <div>
                    <div className="font-medium text-blue-800 dark:text-blue-200">Fortune 500</div>
                    <div className="text-blue-600 dark:text-blue-400">Major enterprises</div>
                  </div>
                  <div>
                    <div className="font-medium text-blue-800 dark:text-blue-200">98%</div>
                    <div className="text-blue-600 dark:text-blue-400">Recommendation rate</div>
                  </div>
                  <div>
                    <div className="font-medium text-blue-800 dark:text-blue-200">Multi-sector</div>
                    <div className="text-blue-600 dark:text-blue-400">Diverse industries</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="segments" className="space-y-4">
              <div className="space-y-4">
                {customerSegments.map((segment, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{segment.segment}</CardTitle>
                      <CardDescription>{segment.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Common Use Cases:</h4>
                          <ul className="text-sm space-y-1">
                            {segment.useCases.map((useCase, idx) => (
                              <li key={idx} className="flex items-center">
                                <CheckCircle className="w-3 h-3 text-green-600 mr-2" />
                                {useCase}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Examples:</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{segment.examples}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="central" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-green-700 dark:text-green-300">Confirmed US Central Customers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 border rounded">
                        <div className="font-medium">GM Financial</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Texas - Major automotive finance company</div>
                        <Badge variant="outline" className="mt-1">Apex Award Winner</Badge>
                      </div>
                      <div className="p-3 border rounded">
                        <div className="font-medium">University of Texas at Austin</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Texas - Large research university</div>
                        <Badge variant="outline" className="mt-1">Polaris Project Partner</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-700 dark:text-blue-300">Target Prospects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">Financial Services</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Major banks, credit unions, insurance companies in TX, IL, OH</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Energy Sector</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Oil & gas companies, utilities, pipeline operators</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Government</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">State agencies, municipal governments, federal facilities</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Healthcare</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Hospital systems, medical research institutions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
                <CardHeader>
                  <CardTitle className="text-green-900 dark:text-green-100">US Central Territory Advantages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Market Characteristics:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Large enterprises with sophisticated security needs</li>
                        <li>• Regulated industries requiring compliance</li>
                        <li>• Energy sector with critical infrastructure</li>
                        <li>• Major universities with complex networks</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Success Metrics:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 20x faster incident response</li>
                        <li>• 75% reduction in investigation time</li>
                        <li>• 35% improvement in detection rates</li>
                        <li>• 80% reduction in manual processes</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

// Strategic Q&A Component
function StrategicQA() {
  const strategicQuestions = [
    {
      category: "Company Strategy",
      questions: [
        {
          q: "How does Corelight plan to leverage its Gartner Leader recognition?",
          a: "Corelight leverages its 2025 Gartner Magic Quadrant Leader position through: (1) Market credibility with the 98% customer recommendation rate as validation, (2) Competitive differentiation highlighting evidence-based approach vs. black-box AI, (3) Sales enablement using third-party validation in enterprise deals, (4) Thought leadership through speaking engagements and industry content, (5) Partner ecosystem expansion with validated market position."
        },
        {
          q: "What are the key strategic initiatives for market expansion?",
          a: "Corelight's expansion strategy focuses on: (1) Segmentation targeting 'upper right quadrant' customers (large enterprises + risk-focused mindset), (2) Geographic expansion with 73.77% US customer base expanding internationally, (3) Vertical penetration in financial services, healthcare, energy, and government, (4) Product innovation with AI/ML enhancements while maintaining transparency, (5) Channel partnerships for broader market reach."
        },
        {
          q: "How does the open-source community influence product development?",
          a: "The Zeek community drives innovation through: (1) 25+ years of community development providing battle-tested foundation, (2) Continuous feedback from thousands of global users, (3) Community-contributed detection scripts and analytics, (4) Academic research integration from universities, (5) Transparency ensuring detection logic remains explainable vs. black-box competitors."
        }
      ]
    },
    {
      category: "Role-Specific",
      questions: [
        {
          q: "What are the most common technical objections Sales Engineers encounter?",
          a: "Common objections include: (1) 'We already have SIEM/EDR' - Position as complementary network evidence layer, not replacement, (2) 'Open source is less secure' - Highlight enterprise hardening and professional support, (3) 'Too complex to deploy' - Reference 15-minute deployment vs. weeks for alternatives, (4) 'Performance concerns' - Use DoD case study showing 30,000 CPS at 16 Gbps, (5) 'Cost justification' - Demonstrate 95% operational improvements and ROI."
        },
        {
          q: "How does Corelight support Sales Engineers in staying current with threats?",
          a: "Corelight provides: (1) Regular threat intelligence briefings from security research team, (2) Community-driven detection updates through Zeek ecosystem, (3) Customer advisory boards sharing real-world threat scenarios, (4) Technical training on latest attack vectors and detection methods, (5) Integration with threat intelligence feeds and industry partnerships."
        },
        {
          q: "What types of customers and use cases are most common?",
          a: "Primary customers include: (1) Fortune 500 enterprises needing advanced threat detection, (2) Government agencies requiring mission-critical security, (3) Financial services with compliance and fraud detection needs, (4) Healthcare organizations protecting patient data, (5) Energy companies securing critical infrastructure. Common use cases: incident response acceleration, threat hunting, compliance monitoring, insider threat detection."
        }
      ]
    },
    {
      category: "Team & Culture",
      questions: [
        {
          q: "How do Sales Engineers collaborate with Product and Customer Success?",
          a: "Collaboration includes: (1) Product feedback loops where Sales Engineers provide customer requirements to Product teams, (2) Joint customer calls with Customer Success for technical implementation guidance, (3) Feature prioritization input based on field feedback, (4) Customer advisory board participation, (5) Technical content creation for marketing and enablement."
        },
        {
          q: "What professional development opportunities are available?",
          a: "Development opportunities include: (1) Technical certifications in cybersecurity and networking, (2) Zeek community involvement and contribution opportunities, (3) Industry conference speaking and attendance, (4) Cross-functional project leadership, (5) Customer-facing technical training and workshops, (6) Internal technical deep-dives and knowledge sharing."
        },
        {
          q: "How does Corelight measure Sales Engineering success?",
          a: "Success metrics include: (1) Technical win rate in competitive evaluations, (2) Customer satisfaction scores from technical interactions, (3) Time to technical close in sales cycles, (4) Product feedback quality and implementation, (5) Customer reference development and advocacy, (6) Team collaboration effectiveness with Sales and Customer Success."
        }
      ]
    }
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Lightbulb className="w-5 h-5" />
            <span>Strategic Interview Questions & Responses</span>
          </CardTitle>
          <CardDescription>
            Comprehensive answers to strategic questions about company direction, role specifics, and team culture
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="company" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="company">Company Strategy</TabsTrigger>
              <TabsTrigger value="role">Role-Specific</TabsTrigger>
              <TabsTrigger value="culture">Team & Culture</TabsTrigger>
            </TabsList>
            
            {strategicQuestions.map((category, categoryIndex) => (
              <TabsContent key={categoryIndex} value={category.category.toLowerCase().replace(' ', '')} className="space-y-4">
                <div className="space-y-6">
                  {category.questions.map((qa, index) => (
                    <Card key={index} className="border-l-4 border-blue-500">
                      <CardHeader>
                        <CardTitle className="text-lg text-blue-900 dark:text-blue-100">
                          {qa.q}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="prose prose-sm max-w-none dark:prose-invert">
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {qa.a}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <Card className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
            <CardHeader>
              <CardTitle className="text-yellow-900 dark:text-yellow-100">Interview Strategy Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Ask Follow-up Questions:</h4>
                  <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                    <li>• "How do you see the NDR market evolving?"</li>
                    <li>• "What's the biggest competitive challenge?"</li>
                    <li>• "How does the team stay ahead of threats?"</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Show Strategic Thinking:</h4>
                  <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                    <li>• Reference market trends and growth</li>
                    <li>• Discuss competitive positioning</li>
                    <li>• Connect technology to business value</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Demonstrate Preparation:</h4>
                  <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                    <li>• Reference specific customer success stories</li>
                    <li>• Mention recent company announcements</li>
                    <li>• Show understanding of company culture</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
