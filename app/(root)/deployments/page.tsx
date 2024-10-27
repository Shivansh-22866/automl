'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Server,
  Clock,
  AlertCircle,
  CheckCircle2,
  MoreVertical,
  RefreshCcw,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Define the type for a deployment
interface Deployment {
  id: number;
  name: string;
  environment: string;
  status: 'Healthy' | 'Warning' | 'Deploying';
  version: string;
  lastDeployed: string;
  cpu: string;
  memory: string;
  replicas: number;
}

const deployments: Deployment[] = [
  {
    id: 1,
    name: "Recommendation Engine",
    environment: "Production",
    status: "Healthy",
    version: "v2.1",
    lastDeployed: "2024-03-20 14:30",
    cpu: "250m",
    memory: "512Mi",
    replicas: 3
  },
  {
    id: 2,
    name: "Fraud Detection",
    environment: "Staging",
    status: "Warning",
    version: "v1.9",
    lastDeployed: "2024-03-19 09:15",
    cpu: "500m",
    memory: "1Gi",
    replicas: 2
  },
  {
    id: 3,
    name: "Image Classification",
    environment: "Development",
    status: "Deploying",
    version: "v3.1",
    lastDeployed: "2024-03-20 16:45",
    cpu: "1000m",
    memory: "2Gi",
    replicas: 1
  }
];

// Define props for the DeploymentCard component
interface DeploymentCardProps {
  deployment: Deployment;
}

const DeploymentCard: React.FC<DeploymentCardProps> = ({ deployment }) => {
  const statusColors: Record<string, string> = {
    Healthy: "text-green-500",
    Warning: "text-yellow-500",
    Deploying: "text-blue-500"
  };

  const statusIcons: Record<string, React.ElementType> = {
    Healthy: CheckCircle2,
    Warning: AlertCircle,
    Deploying: RefreshCcw
  };

  const StatusIcon = statusIcons[deployment.status];

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{deployment.name}</CardTitle>
            <CardDescription>{deployment.environment}</CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View Logs</DropdownMenuItem>
              <DropdownMenuItem>Scale</DropdownMenuItem>
              <DropdownMenuItem>Rollback</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <StatusIcon className={`h-4 w-4 ${statusColors[deployment.status]}`} />
            <span className={statusColors[deployment.status]}>{deployment.status}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Version</p>
              <p className="font-medium">{deployment.version}</p>
            </div>
            <div>
              <p className="text-gray-500">Replicas</p>
              <p className="font-medium">{deployment.replicas}</p>
            </div>
            <div>
              <p className="text-gray-500">CPU</p>
              <p className="font-medium">{deployment.cpu}</p>
            </div>
            <div>
              <p className="text-gray-500">Memory</p>
              <p className="font-medium">{deployment.memory}</p>
            </div>
          </div>
          
          <div className="text-sm text-gray-500">
            <Clock className="h-4 w-4 inline mr-1" />
            Deployed {deployment.lastDeployed}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function DeploymentsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Deployments</h1>
          <p className="text-gray-600">Monitor and manage your model deployments</p>
        </div>
        <Button className="flex items-center gap-2">
          <Server className="w-4 h-4" />
          New Deployment
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Deployments</CardTitle>
            <Server className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Healthy</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Warnings</CardTitle>
            <AlertCircle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Deploying</CardTitle>
            <RefreshCcw className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
          </CardContent>
        </Card>
      </div>

      {/* Deployments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deployments.map((deployment) => (
          <DeploymentCard key={deployment.id} deployment={deployment} />
        ))}
      </div>
    </div>
  );
}
