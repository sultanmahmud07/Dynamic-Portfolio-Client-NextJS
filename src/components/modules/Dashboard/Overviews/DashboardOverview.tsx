/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
      Table,
      TableBody,
      TableCell,
      TableHead,
      TableHeader,
      TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
      Users,
      FolderKanban,
      FileText,
      Mail,
      Clock,
      UserCircle,
      Briefcase,
      Newspaper,
      Inbox,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { toast } from "sonner";

interface OverviewData {
      totalProjects: number;
      totalPosts: number;
      totalUsers: number;
      totalContacts: number;
}

interface ActivityItem {
      type: string;
      id: number;
      name?: string;
      email?: string;
      title?: string;
      slug?: string;
      createdAt: string;
}

const DashboardOverview = () => {
      const [overview, setOverview] = useState<OverviewData | null>(null);
      const [activities, setActivities] = useState<ActivityItem[]>([]);
      const [isLoading, setIsLoading] = useState(false);

      useEffect(() => {
            fetchOverview();
            fetchRecentActivities();
      }, []);

      // ===== Fetch Dashboard Overview =====
      const fetchOverview = async () => {
            setIsLoading(true);
            try {
                  const res = await axios.get(
                        `${process.env.NEXT_PUBLIC_BASE_API}/stats/overview`
                  );
                  setOverview(res.data.data);
            } catch (error) {
                  toast.error("Failed to fetch dashboard overview");
            } finally {
                  setIsLoading(false);
            }
      };

      // ===== Fetch Recent Activity Logs =====
      const fetchRecentActivities = async () => {
            try {
                  const res = await axios.get(
                        `${process.env.NEXT_PUBLIC_BASE_API}/stats/recent`
                  );
                  setActivities(res.data.data);
            } catch (error) {
                  toast.error("Failed to fetch recent activities");
            }
      };

      return (
            <div className="space-y-6">
                  {/* ===== Dashboard Overview ===== */}
                  <h2 className="text-xl font-bold mb-4">Dashboard Overview</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Total Projects */}
                        <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-md p-6 border border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                              <div className="flex items-center justify-between">
                                    <div>
                                          <h3 className="text-sm font-medium text-gray-600">Total Projects</h3>
                                          <p className="text-3xl font-extrabold text-blue-700 mt-2">
                                                {overview?.totalProjects ?? 0}
                                          </p>
                                    </div>
                                    <div className="bg-blue-500/10 p-3 rounded-full group-hover:scale-110 transition">
                                          <Briefcase className="w-8 h-8 text-blue-600" />
                                    </div>
                              </div>
                              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-blue-500/5 blur-2xl" />
                        </div>

                        {/* Total Posts */}
                        <div className="group relative bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-md p-6 border border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                              <div className="flex items-center justify-between">
                                    <div>
                                          <h3 className="text-sm font-medium text-gray-600">Total Posts</h3>
                                          <p className="text-3xl font-extrabold text-green-700 mt-2">
                                                {overview?.totalPosts ?? 0}
                                          </p>
                                    </div>
                                    <div className="bg-green-500/10 p-3 rounded-full group-hover:scale-110 transition">
                                          <Newspaper className="w-8 h-8 text-green-600" />
                                    </div>
                              </div>
                              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-green-500/5 blur-2xl" />
                        </div>

                        {/* Total Users */}
                        <div className="group relative bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-md p-6 border border-purple-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                              <div className="flex items-center justify-between">
                                    <div>
                                          <h3 className="text-sm font-medium text-gray-600">Total Users</h3>
                                          <p className="text-3xl font-extrabold text-purple-700 mt-2">
                                                {overview?.totalUsers ?? 0}
                                          </p>
                                    </div>
                                    <div className="bg-purple-500/10 p-3 rounded-full group-hover:scale-110 transition">
                                          <Users className="w-8 h-8 text-purple-600" />
                                    </div>
                              </div>
                              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-purple-500/5 blur-2xl" />
                        </div>

                        {/* Contact Queries */}
                        <div className="group relative bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl shadow-md p-6 border border-pink-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                              <div className="flex items-center justify-between">
                                    <div>
                                          <h3 className="text-sm font-medium text-gray-600">Contact Queries</h3>
                                          <p className="text-3xl font-extrabold text-pink-700 mt-2">
                                                {overview?.totalContacts ?? 0}
                                          </p>
                                    </div>
                                    <div className="bg-pink-500/10 p-3 rounded-full group-hover:scale-110 transition">
                                          <Mail className="w-8 h-8 text-pink-600" />
                                    </div>
                              </div>
                              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-pink-500/5 blur-2xl" />
                        </div>
                  </div>


                  {/* ===== Recent Activities Table ===== */}
                  <div className="mt-6">
                        <h2 className="text-xl font-bold mb-2">Recent Activities</h2>
                        <div className="overflow-x-auto">
                              <Table>
                                    <TableHeader>
                                          <TableRow className="bg-secondary">
                                                <TableHead className="w-12">Type</TableHead>
                                                <TableHead>Title / Name</TableHead>
                                                <TableHead>Email / Slug</TableHead>
                                                <TableHead>Created</TableHead>
                                          </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                          {activities.length ? (
                                                activities.map((item) => (
                                                      <TableRow
                                                            key={`${item.type}-${item.id}`}
                                                            className="hover:bg-gray-50 bg-white transition"
                                                      >
                                                            <TableCell>
                                                                  <ActivityIcon type={item.type} />
                                                            </TableCell>
                                                            <TableCell className="font-medium">
                                                                  {item?.title
                                                                        ? item.title.length > 30
                                                                              ? item.title.slice(0, 30) + "..."
                                                                              : item.title
                                                                        : item?.name
                                                                              ? item.name.length > 30
                                                                                    ? item.name.slice(0, 30) + "..."
                                                                                    : item.name
                                                                              : "—"}
                                                            </TableCell>

                                                            <TableCell>{item.email || item?.slug?.slice(0, 30) || "—"}</TableCell>
                                                            <TableCell className="text-sm text-gray-500">
                                                                  {formatDistanceToNow(new Date(item.createdAt), {
                                                                        addSuffix: true,
                                                                  })}
                                                            </TableCell>
                                                      </TableRow>
                                                ))
                                          ) : (
                                                <TableRow>
                                                      <TableCell colSpan={4} className="text-center py-6">
                                                            No recent activities found.
                                                      </TableCell>
                                                </TableRow>
                                          )}
                                    </TableBody>
                              </Table>
                        </div>
                  </div>
            </div>
      );
};

export default DashboardOverview;

const DashboardCard = ({
      title,
      count,
      icon,
      bgColor,
}: {
      title: string;
      count?: number;
      icon: React.ReactNode;
      bgColor: string;
}) => (
      <Card
            className={`flex items-center justify-between p-5 shadow-sm border-l-4 border-transparent hover:border-l-indigo-500 transition ${bgColor}`}
      >
            <div>
                  <CardTitle className="text-lg font-semibold text-gray-800">{title}</CardTitle>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{count ?? 0}</p>
            </div>
            <div className="p-3 bg-white rounded-full shadow-sm">{icon}</div>
      </Card>
);

const ActivityIcon = ({ type }: { type: string }) => {
      switch (type) {
            case "User":
                  return <UserCircle className="w-6 h-6 text-purple-500" />;
            case "Project":
                  return <FolderKanban className="w-6 h-6 text-blue-500" />;
            case "Post":
                  return <FileText className="w-6 h-6 text-green-500" />;
            case "Contact":
                  return <Inbox className="w-6 h-6 text-pink-500" />;
            default:
                  return <Clock className="w-6 h-6 text-gray-400" />;
      }
};
