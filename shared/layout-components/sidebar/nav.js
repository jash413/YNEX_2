import { FindInPage } from "@mui/icons-material";
import React from "react";

const BusinessIcon = <i className="bx bx-buildings side-menu__icon"></i>

const BuildingHouseIcon = <i className="bx bx-building-house side-menu__icon"></i>

const TaskIcon = <i className="bx bx-task side-menu__icon"></i>

const PagesIcon = <i className="bx bx-file-blank side-menu__icon"></i>

const DollarIcon = <i className="bx bx-dollar side-menu__icon"></i>

const MoneyIcon = <i className="bx bx-money side-menu__icon"></i>

const AuthenticationIcon = <i className="bx bx-fingerprint side-menu__icon"></i>

const ToolsIcon = <i className="bx bx-medal side-menu__icon"></i>

const BrainIcon = <i className="bx bx-brain side-menu__icon"></i>

const FolderIcon = <i className="bx bx-folder side-menu__icon"></i>

const Icons = <i className="bx bx-store-alt side-menu__icon"></i>


const badge = <span className="badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2">12</span>
const badge1 = <span className="text-secondary text-[0.75em] rounded-sm !py-[0.25rem] !px-[0.45rem] badge !bg-secondary/10 ms-2">New</span>
const badge2=<span className="text-danger text-[0.75em] rounded-sm badge !py-[0.25rem] !px-[0.45rem] !bg-danger/10 ms-2">Hot</span>
const badge4 = <span className="text-success text-[0.75em] badge !py-[0.25rem] !px-[0.45rem] rounded-sm bg-success/10 ms-2">3</span>

export const MenuItems = [
    {menutitle: "MAIN", Items: [

            {icon: BuildingHouseIcon, title: 'Business Hub', type: "sub", active: false, children: [
                    {path: "/components/business-hub/summary", type: "link", active: false, selected: false, title: "Summary" },
                    {path: "/components/business-hub/sales", type: "link", active: false, selected: false, title: "Sales" },
                    {path: "/components/business-hub/finances", type: "link", active: false, selected: false, title: "Business Finances" },
                    {path: "/components/business-hub/subcontractors", type: "link", active: false, selected: false, title: "Sub Contractors" },
                    {path: "/components/business-hub/team", type: "link", active: false, selected: false, title: "Manage Team" },
                    {path: "/components/business-hub/ai-insights", type: "link", active: false, selected: false, title: "Insights" },
                    {path: "/components/business-hub/calendar", type: "link", active: false, selected: false, title: "Calendar" },
                ]
            },
        ]
    },
    {
        menutitle: "Project Related", Items: [

            { icon: TaskIcon,  title: "Project Management", type: "sub", active: false, children: [
                    {path: "/components/project-management/project-summary", type: "link", active: false, selected: false, title: "Summary" },
                    {path: "/components/project-management/tasks", type: "link", active: false, selected: false, title: "Tasks" },
                    {path: "/components/project-management/schedule", type: "link", active: false, selected: false, title: "Schedule" },
                    {path: "/components/project-management/progression-notes", type: "link", active: false, selected: false, title: "Progression Notes" },
                    {path: "/components/project-management/purchase-orders", type: "link", active: false, selected: false, title: "Purchase Orders" },
                    {path: "/components/project-management/change-orders", type: "link", active: false, selected: false, title: "Change Orders" },
                    {path: "/components/project-management/specifications", type: "link", active: false, selected: false, title: "Specifications" },
                    {path: "/components/project-management/selections", type: "link", active: false, selected: false, title: "Selections" },
                ]
            },
            { icon: MoneyIcon, title: "Bids", type: "sub", active: false, selected: false, children: [

                {path: "/components/bids/create-bid", type: "link", active: false, selected: false, title: "Create Bid" },
                {path: "/components/bids/bids", type: "link", active: false, selected: false, title: "View bids" },
                ]
            }, 
            { icon: DollarIcon, title: "Finances", type: "sub", active: false, selected: false, children: [
                    {path: "/components/finances/estimates", type: "link", active: false, selected: false, title: "Estimate & Budget" },
                    {path: "/components/finances/performance", type: "link", active: false, selected: false, title: "Cost and Performance" },
                    {path: "/components/finances/payables", type: "link", active: false, selected: false, title: "Payables" },
                    {path: "/components/finances/recievables", type: "link", active: false, selected: false, title: "Recievables" },
                    {path: "/components/finances/reports", type: "link", active: false, selected: false, title: "Reports" },
                ]
            },
            { icon: ToolsIcon, title: "Tools", type: "sub", active: false, selected: false, children: [

                {path: "/components/tools/takeoff", type: "link", active: false, selected: false, title: "Takeoff" },
                {path: "/components/tools/inspiration", type: "link", active: false, selected: false, title: "Inspiration" },
                ]
            },
            { icon: FolderIcon, title: "Files", type: "sub", active: false, selected: false, children: [

                {path: "/components/files/docs", type: "link", active: false, selected: false, title: "Documents" },
                {path: "/components/files/pictures", type: "link", active: false, selected: false, title: "Pictures and Videos" },
                ]
            }
        ]
    },
    { menutitle: "Chat & AI", Items: [
            { path: "/components/chat/chat", type: "link", active: false, selected: false, title: "Chat" },
            {path: "/components/chat/ai", type: "link", active: false, selected: false, title: "AI" }, 
            ],
    },
];


export default MenuItems
