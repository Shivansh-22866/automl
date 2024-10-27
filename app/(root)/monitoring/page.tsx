'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Line } from 'react-chartjs-2';

const MonitoringPage = () => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [
      {
        label: 'Model Accuracy',
        data: [90, 92, 93, 95, 97],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Response Time (ms)',
        data: [200, 180, 160, 140, 120],
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        fill: false,
      }
    ]
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Monitoring</h1>
          <p className="text-gray-600">Track your models and deployments performance</p>
        </div>
      </div>

      {/* Performance Charts */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Line data={data} />
        </CardContent>
      </Card>

      {/* Health Checks */}
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Health Checks</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Check the health status of your deployments and models.</p>
          {/* Here you can implement a health check table or list */}
        </CardContent>
      </Card>
    </div>
  );
}

export default MonitoringPage;
