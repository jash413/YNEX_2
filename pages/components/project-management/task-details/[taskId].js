import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import network from "@/config";
import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FilePond } from "react-filepond";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import axios from "axios";
import Preloader from "@/shared/layout-components/preloader/preloader";

const TaskDetails = ({ taskId }) => {
return(
    <div>
        hello
    </div>
)
}

TaskDetails.layout = "Contentlayout";
export default TaskDetails;