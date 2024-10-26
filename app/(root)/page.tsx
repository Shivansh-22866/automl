import React from 'react';
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Activity,
  Brain,
  GitBranch,
  History,
  LayoutDashboard,
  Server,
  Settings,
  Star,
  Zap
} from "lucide-react";
import CreateProjectForm from "@/components/shared/ProjectForm";
import PerformanceChart from '@/components/shared/PerformanceChart';

const ModelCard = ({ name, status, metric, change } : any) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">
        {name}
      </CardTitle>
      <Brain className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{metric}</div>
      <p className={`text-xs ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {change >= 0 ? '↗' : '↘'} {Math.abs(change)}% from last week
      </p>
    </CardContent>
  </Card>
);

export default function Home() {
  const user = auth();
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden lg:flex flex-col w-64 bg-white dark:bg-gray-800 border-r">
          <div className="p-6">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Zap className="w-6 h-6 text-blue-500" />
              MLOps Hub
            </h1>
          </div>
          <nav className="flex-1 p-4">
            {['Dashboard', 'Models', 'Deployments', 'Monitoring', 'Settings'].map((item) => (
              <div key={item} className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer">
                {item === 'Dashboard' && <LayoutDashboard className="w-5 h-5" />}
                {item === 'Models' && <Brain className="w-5 h-5" />}
                {item === 'Deployments' && <Server className="w-5 h-5" />}
                {item === 'Monitoring' && <Activity className="w-5 h-5" />}
                {item === 'Settings' && <Settings className="w-5 h-5" />}
                {item}
              </div>
            ))}
          </nav>
          <div className="p-4 border-t">
            <UserButton />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <SignedIn>
            <main className="p-8">
              {/* Header Section */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h1 className="text-3xl font-bold">Welcome back!</h1>
                  <p className="text-gray-600">Here&apos;s your MLOps overview</p>
                </div>
                <CreateProjectForm userId={user?.userId} />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <ModelCard 
                  name="Active Models"
                  metric="12"
                  change={8}
                  status="active"
                />
                <ModelCard 
                  name="Total Deployments"
                  metric="48"
                  change={12}
                  status="deployed"
                />
                <ModelCard 
                  name="Avg. Accuracy"
                  metric="95.8%"
                  change={2.4}
                  status="accuracy"
                />
                <ModelCard 
                  name="Response Time"
                  metric="102ms"
                  change={-5}
                  status="latency"
                />
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <PerformanceChart />

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Deployments</CardTitle>
                    <CardDescription>Latest model versions in production</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: 'Recommendation Engine v2.1', time: '2h ago', status: 'active' },
                        { name: 'Fraud Detection v1.8', time: '1d ago', status: 'active' },
                        { name: 'Image Classification v3.0', time: '2d ago', status: 'warning' },
                      ].map((deployment) => (
                        <div key={deployment.name} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center gap-3">
                            <GitBranch className="w-5 h-5 text-blue-500" />
                            <div>
                              <p className="font-medium">{deployment.name}</p>
                              <p className="text-sm text-gray-500">{deployment.time}</p>
                            </div>
                          </div>
                          <div className={`px-2 py-1 rounded-full text-xs ${
                            deployment.status === 'active' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {deployment.status}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest actions and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { icon: Star, title: 'New model version deployed', desc: 'Recommendation Engine v2.1 is now live', time: '2 hours ago' },
                      { icon: History, title: 'Performance report generated', desc: 'Monthly analysis for all production models', time: '5 hours ago' },
                      { icon: Settings, title: 'System maintenance', desc: 'Routine optimization completed', time: '1 day ago' },
                    ].map((activity, i) => (
                      <div key={i} className="flex items-start gap-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">
                        <activity.icon className="w-5 h-5 text-blue-500 mt-1" />
                        <div>
                          <p className="font-medium">{activity.title}</p>
                          <p className="text-sm text-gray-600">{activity.desc}</p>
                          <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </main>
          </SignedIn>

          <SignedOut>
            <div className="min-h-screen flex items-center justify-center">
              <Card className="w-96">
                <CardHeader>
                  <CardTitle>Welcome to MLOps Hub</CardTitle>
                  <CardDescription>
                    Sign in to access your ML operations dashboard
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link 
                    href="/sign-in"
                    className="w-full inline-flex justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
                  >
                    Sign In
                  </Link>
                </CardContent>
              </Card>
            </div>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}