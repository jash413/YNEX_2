export default function handler(req, res) {
  res.status(200).json(
    {
      jsonapi: {
        version: "1.1",
      },
      links: {
        self: "http://localhostx:3000/api/task",
        first: "http://localhostx:3000/api/task?page%5Blimit%5D=100",
        last: "http://localhostx:3000/api/task?page%5Boffset%5D=500",
        prev: null,
        next: "http://localhostx:3000/api/task?page%5Boffset%5D=100&page%5Blimit%5D=100",
      },
      data: [
        {
          type: "task",
          id: 1,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 1,
            task_name: "Architectural",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/1",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/1/relationships/project",
                related: "http://localhostx:3000/api/task/1/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/1/relationships/task_codes",
                related: "http://localhostx:3000/api/task/1/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 1,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/1/relationships/task_owner",
                related: "http://localhostx:3000/api/task/1/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/1/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/1/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/1/relationships/punch_list",
                related: "http://localhostx:3000/api/task/1/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/1/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/1/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/1/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/1/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/1/relationships/bids",
                related: "http://localhostx:3000/api/task/1/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/1/relationships/files",
                related: "http://localhostx:3000/api/task/1/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 2,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 2,
            task_name: "PurchaseBuildersRiskInsurance",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/2",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/2/relationships/project",
                related: "http://localhostx:3000/api/task/2/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/2/relationships/task_codes",
                related: "http://localhostx:3000/api/task/2/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 2,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/2/relationships/task_owner",
                related: "http://localhostx:3000/api/task/2/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/2/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/2/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/2/relationships/punch_list",
                related: "http://localhostx:3000/api/task/2/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/2/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/2/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/2/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/2/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/2/relationships/bids",
                related: "http://localhostx:3000/api/task/2/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/2/relationships/files",
                related: "http://localhostx:3000/api/task/2/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 3,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 3,
            task_name: "EngineeringDesign",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/3",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/3/relationships/project",
                related: "http://localhostx:3000/api/task/3/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/3/relationships/task_codes",
                related: "http://localhostx:3000/api/task/3/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 3,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/3/relationships/task_owner",
                related: "http://localhostx:3000/api/task/3/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/3/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/3/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/3/relationships/punch_list",
                related: "http://localhostx:3000/api/task/3/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/3/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/3/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/3/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/3/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/3/relationships/bids",
                related: "http://localhostx:3000/api/task/3/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/3/relationships/files",
                related: "http://localhostx:3000/api/task/3/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 4,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 4,
            task_name: "Permitting/Preliminary",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/4",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/4/relationships/project",
                related: "http://localhostx:3000/api/task/4/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/4/relationships/task_codes",
                related: "http://localhostx:3000/api/task/4/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 4,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/4/relationships/task_owner",
                related: "http://localhostx:3000/api/task/4/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/4/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/4/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/4/relationships/punch_list",
                related: "http://localhostx:3000/api/task/4/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/4/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/4/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/4/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/4/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/4/relationships/bids",
                related: "http://localhostx:3000/api/task/4/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/4/relationships/files",
                related: "http://localhostx:3000/api/task/4/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 5,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 5,
            task_name: "Clearing-SiteWork",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/5",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/5/relationships/project",
                related: "http://localhostx:3000/api/task/5/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/5/relationships/task_codes",
                related: "http://localhostx:3000/api/task/5/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 5,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/5/relationships/task_owner",
                related: "http://localhostx:3000/api/task/5/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/5/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/5/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/5/relationships/punch_list",
                related: "http://localhostx:3000/api/task/5/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/5/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/5/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/5/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/5/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/5/relationships/bids",
                related: "http://localhostx:3000/api/task/5/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/5/relationships/files",
                related: "http://localhostx:3000/api/task/5/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 6,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 6,
            task_name: "Excavation",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/6",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/6/relationships/project",
                related: "http://localhostx:3000/api/task/6/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/6/relationships/task_codes",
                related: "http://localhostx:3000/api/task/6/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 6,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/6/relationships/task_owner",
                related: "http://localhostx:3000/api/task/6/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/6/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/6/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/6/relationships/punch_list",
                related: "http://localhostx:3000/api/task/6/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/6/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/6/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/6/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/6/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/6/relationships/bids",
                related: "http://localhostx:3000/api/task/6/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/6/relationships/files",
                related: "http://localhostx:3000/api/task/6/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 7,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 7,
            task_name: "Footings",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/7",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/7/relationships/project",
                related: "http://localhostx:3000/api/task/7/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/7/relationships/task_codes",
                related: "http://localhostx:3000/api/task/7/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 7,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/7/relationships/task_owner",
                related: "http://localhostx:3000/api/task/7/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/7/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/7/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/7/relationships/punch_list",
                related: "http://localhostx:3000/api/task/7/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/7/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/7/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/7/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/7/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/7/relationships/bids",
                related: "http://localhostx:3000/api/task/7/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/7/relationships/files",
                related: "http://localhostx:3000/api/task/7/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 8,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 8,
            task_name: "UndergroundPlumbing",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/8",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/8/relationships/project",
                related: "http://localhostx:3000/api/task/8/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/8/relationships/task_codes",
                related: "http://localhostx:3000/api/task/8/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 8,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/8/relationships/task_owner",
                related: "http://localhostx:3000/api/task/8/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/8/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/8/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/8/relationships/punch_list",
                related: "http://localhostx:3000/api/task/8/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/8/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/8/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/8/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/8/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/8/relationships/bids",
                related: "http://localhostx:3000/api/task/8/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/8/relationships/files",
                related: "http://localhostx:3000/api/task/8/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 9,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 9,
            task_name: "UndergroundElectrical",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/9",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/9/relationships/project",
                related: "http://localhostx:3000/api/task/9/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/9/relationships/task_codes",
                related: "http://localhostx:3000/api/task/9/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 9,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/9/relationships/task_owner",
                related: "http://localhostx:3000/api/task/9/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/9/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/9/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/9/relationships/punch_list",
                related: "http://localhostx:3000/api/task/9/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/9/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/9/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/9/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/9/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/9/relationships/bids",
                related: "http://localhostx:3000/api/task/9/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/9/relationships/files",
                related: "http://localhostx:3000/api/task/9/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 10,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 10,
            task_name: "Foundation",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/10",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/10/relationships/project",
                related: "http://localhostx:3000/api/task/10/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/10/relationships/task_codes",
                related: "http://localhostx:3000/api/task/10/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 10,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/10/relationships/task_owner",
                related: "http://localhostx:3000/api/task/10/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/10/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/10/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/10/relationships/punch_list",
                related: "http://localhostx:3000/api/task/10/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/10/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/10/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/10/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/10/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/10/relationships/bids",
                related: "http://localhostx:3000/api/task/10/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/10/relationships/files",
                related: "http://localhostx:3000/api/task/10/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 11,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 11,
            task_name: "Framing",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/11",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/11/relationships/project",
                related: "http://localhostx:3000/api/task/11/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/11/relationships/task_codes",
                related: "http://localhostx:3000/api/task/11/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 11,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/11/relationships/task_owner",
                related: "http://localhostx:3000/api/task/11/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/11/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/11/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/11/relationships/punch_list",
                related: "http://localhostx:3000/api/task/11/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/11/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/11/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/11/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/11/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/11/relationships/bids",
                related: "http://localhostx:3000/api/task/11/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/11/relationships/files",
                related: "http://localhostx:3000/api/task/11/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 12,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 12,
            task_name: "HVACRoughIn",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/12",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/12/relationships/project",
                related: "http://localhostx:3000/api/task/12/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/12/relationships/task_codes",
                related: "http://localhostx:3000/api/task/12/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 12,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/12/relationships/task_owner",
                related: "http://localhostx:3000/api/task/12/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/12/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/12/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/12/relationships/punch_list",
                related: "http://localhostx:3000/api/task/12/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/12/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/12/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/12/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/12/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/12/relationships/bids",
                related: "http://localhostx:3000/api/task/12/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/12/relationships/files",
                related: "http://localhostx:3000/api/task/12/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 13,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 13,
            task_name: "PlumbingRoughIn",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/13",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/13/relationships/project",
                related: "http://localhostx:3000/api/task/13/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/13/relationships/task_codes",
                related: "http://localhostx:3000/api/task/13/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 13,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/13/relationships/task_owner",
                related: "http://localhostx:3000/api/task/13/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/13/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/13/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/13/relationships/punch_list",
                related: "http://localhostx:3000/api/task/13/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/13/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/13/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/13/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/13/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/13/relationships/bids",
                related: "http://localhostx:3000/api/task/13/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/13/relationships/files",
                related: "http://localhostx:3000/api/task/13/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 14,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 14,
            task_name: "ElectricalRoughIn",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/14",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/14/relationships/project",
                related: "http://localhostx:3000/api/task/14/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/14/relationships/task_codes",
                related: "http://localhostx:3000/api/task/14/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 14,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/14/relationships/task_owner",
                related: "http://localhostx:3000/api/task/14/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/14/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/14/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/14/relationships/punch_list",
                related: "http://localhostx:3000/api/task/14/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/14/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/14/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/14/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/14/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/14/relationships/bids",
                related: "http://localhostx:3000/api/task/14/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/14/relationships/files",
                related: "http://localhostx:3000/api/task/14/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 15,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 15,
            task_name: "ApplySheathing",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/15",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/15/relationships/project",
                related: "http://localhostx:3000/api/task/15/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/15/relationships/task_codes",
                related: "http://localhostx:3000/api/task/15/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 15,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/15/relationships/task_owner",
                related: "http://localhostx:3000/api/task/15/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/15/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/15/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/15/relationships/punch_list",
                related: "http://localhostx:3000/api/task/15/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/15/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/15/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/15/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/15/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/15/relationships/bids",
                related: "http://localhostx:3000/api/task/15/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/15/relationships/files",
                related: "http://localhostx:3000/api/task/15/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 16,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 16,
            task_name: "Roofing",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/16",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/16/relationships/project",
                related: "http://localhostx:3000/api/task/16/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/16/relationships/task_codes",
                related: "http://localhostx:3000/api/task/16/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 16,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/16/relationships/task_owner",
                related: "http://localhostx:3000/api/task/16/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/16/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/16/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/16/relationships/punch_list",
                related: "http://localhostx:3000/api/task/16/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/16/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/16/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/16/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/16/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/16/relationships/bids",
                related: "http://localhostx:3000/api/task/16/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/16/relationships/files",
                related: "http://localhostx:3000/api/task/16/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 17,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 17,
            task_name: "HouseWrap",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/17",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/17/relationships/project",
                related: "http://localhostx:3000/api/task/17/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/17/relationships/task_codes",
                related: "http://localhostx:3000/api/task/17/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 17,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/17/relationships/task_owner",
                related: "http://localhostx:3000/api/task/17/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/17/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/17/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/17/relationships/punch_list",
                related: "http://localhostx:3000/api/task/17/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/17/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/17/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/17/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/17/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/17/relationships/bids",
                related: "http://localhostx:3000/api/task/17/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/17/relationships/files",
                related: "http://localhostx:3000/api/task/17/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 18,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 18,
            task_name: "DoorsInstall-Exterior",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/18",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/18/relationships/project",
                related: "http://localhostx:3000/api/task/18/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/18/relationships/task_codes",
                related: "http://localhostx:3000/api/task/18/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 18,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/18/relationships/task_owner",
                related: "http://localhostx:3000/api/task/18/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/18/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/18/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/18/relationships/punch_list",
                related: "http://localhostx:3000/api/task/18/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/18/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/18/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/18/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/18/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/18/relationships/bids",
                related: "http://localhostx:3000/api/task/18/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/18/relationships/files",
                related: "http://localhostx:3000/api/task/18/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 19,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 19,
            task_name: "WindowsInstall",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/19",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/19/relationships/project",
                related: "http://localhostx:3000/api/task/19/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/19/relationships/task_codes",
                related: "http://localhostx:3000/api/task/19/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 19,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/19/relationships/task_owner",
                related: "http://localhostx:3000/api/task/19/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/19/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/19/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/19/relationships/punch_list",
                related: "http://localhostx:3000/api/task/19/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/19/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/19/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/19/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/19/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/19/relationships/bids",
                related: "http://localhostx:3000/api/task/19/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/19/relationships/files",
                related: "http://localhostx:3000/api/task/19/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 20,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 20,
            task_name: "ExteriorMasonry",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/20",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/20/relationships/project",
                related: "http://localhostx:3000/api/task/20/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/20/relationships/task_codes",
                related: "http://localhostx:3000/api/task/20/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 20,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/20/relationships/task_owner",
                related: "http://localhostx:3000/api/task/20/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/20/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/20/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/20/relationships/punch_list",
                related: "http://localhostx:3000/api/task/20/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/20/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/20/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/20/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/20/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/20/relationships/bids",
                related: "http://localhostx:3000/api/task/20/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/20/relationships/files",
                related: "http://localhostx:3000/api/task/20/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 21,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 21,
            task_name: "SidingInstall",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/21",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/21/relationships/project",
                related: "http://localhostx:3000/api/task/21/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/21/relationships/task_codes",
                related: "http://localhostx:3000/api/task/21/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 21,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/21/relationships/task_owner",
                related: "http://localhostx:3000/api/task/21/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/21/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/21/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/21/relationships/punch_list",
                related: "http://localhostx:3000/api/task/21/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/21/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/21/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/21/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/21/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/21/relationships/bids",
                related: "http://localhostx:3000/api/task/21/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/21/relationships/files",
                related: "http://localhostx:3000/api/task/21/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 22,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 22,
            task_name: "Insulation",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/22",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/22/relationships/project",
                related: "http://localhostx:3000/api/task/22/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/22/relationships/task_codes",
                related: "http://localhostx:3000/api/task/22/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 22,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/22/relationships/task_owner",
                related: "http://localhostx:3000/api/task/22/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/22/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/22/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/22/relationships/punch_list",
                related: "http://localhostx:3000/api/task/22/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/22/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/22/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/22/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/22/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/22/relationships/bids",
                related: "http://localhostx:3000/api/task/22/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/22/relationships/files",
                related: "http://localhostx:3000/api/task/22/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 23,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 23,
            task_name: "Drywall",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/23",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/23/relationships/project",
                related: "http://localhostx:3000/api/task/23/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/23/relationships/task_codes",
                related: "http://localhostx:3000/api/task/23/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 23,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/23/relationships/task_owner",
                related: "http://localhostx:3000/api/task/23/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/23/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/23/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/23/relationships/punch_list",
                related: "http://localhostx:3000/api/task/23/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/23/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/23/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/23/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/23/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/23/relationships/bids",
                related: "http://localhostx:3000/api/task/23/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/23/relationships/files",
                related: "http://localhostx:3000/api/task/23/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 24,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 24,
            task_name: "Prime/PaintInterior/Exterior",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/24",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/24/relationships/project",
                related: "http://localhostx:3000/api/task/24/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/24/relationships/task_codes",
                related: "http://localhostx:3000/api/task/24/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 24,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/24/relationships/task_owner",
                related: "http://localhostx:3000/api/task/24/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/24/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/24/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/24/relationships/punch_list",
                related: "http://localhostx:3000/api/task/24/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/24/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/24/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/24/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/24/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/24/relationships/bids",
                related: "http://localhostx:3000/api/task/24/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/24/relationships/files",
                related: "http://localhostx:3000/api/task/24/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 25,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 25,
            task_name: "CabinetInstall",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/25",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/25/relationships/project",
                related: "http://localhostx:3000/api/task/25/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/25/relationships/task_codes",
                related: "http://localhostx:3000/api/task/25/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 25,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/25/relationships/task_owner",
                related: "http://localhostx:3000/api/task/25/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/25/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/25/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/25/relationships/punch_list",
                related: "http://localhostx:3000/api/task/25/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/25/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/25/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/25/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/25/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/25/relationships/bids",
                related: "http://localhostx:3000/api/task/25/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/25/relationships/files",
                related: "http://localhostx:3000/api/task/25/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 26,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 26,
            task_name: "InteriorMillwork",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/26",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/26/relationships/project",
                related: "http://localhostx:3000/api/task/26/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/26/relationships/task_codes",
                related: "http://localhostx:3000/api/task/26/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 26,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/26/relationships/task_owner",
                related: "http://localhostx:3000/api/task/26/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/26/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/26/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/26/relationships/punch_list",
                related: "http://localhostx:3000/api/task/26/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/26/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/26/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/26/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/26/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/26/relationships/bids",
                related: "http://localhostx:3000/api/task/26/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/26/relationships/files",
                related: "http://localhostx:3000/api/task/26/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 27,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 27,
            task_name: "Painting-Exterior",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/27",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/27/relationships/project",
                related: "http://localhostx:3000/api/task/27/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/27/relationships/task_codes",
                related: "http://localhostx:3000/api/task/27/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 27,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/27/relationships/task_owner",
                related: "http://localhostx:3000/api/task/27/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/27/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/27/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/27/relationships/punch_list",
                related: "http://localhostx:3000/api/task/27/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/27/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/27/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/27/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/27/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/27/relationships/bids",
                related: "http://localhostx:3000/api/task/27/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/27/relationships/files",
                related: "http://localhostx:3000/api/task/27/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 28,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 28,
            task_name: "Painting-Interior",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/28",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/28/relationships/project",
                related: "http://localhostx:3000/api/task/28/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/28/relationships/task_codes",
                related: "http://localhostx:3000/api/task/28/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 28,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/28/relationships/task_owner",
                related: "http://localhostx:3000/api/task/28/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/28/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/28/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/28/relationships/punch_list",
                related: "http://localhostx:3000/api/task/28/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/28/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/28/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/28/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/28/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/28/relationships/bids",
                related: "http://localhostx:3000/api/task/28/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/28/relationships/files",
                related: "http://localhostx:3000/api/task/28/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 29,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 29,
            task_name: "ExteriorFlatwork",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/29",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/29/relationships/project",
                related: "http://localhostx:3000/api/task/29/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/29/relationships/task_codes",
                related: "http://localhostx:3000/api/task/29/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 29,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/29/relationships/task_owner",
                related: "http://localhostx:3000/api/task/29/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/29/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/29/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/29/relationships/punch_list",
                related: "http://localhostx:3000/api/task/29/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/29/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/29/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/29/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/29/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/29/relationships/bids",
                related: "http://localhostx:3000/api/task/29/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/29/relationships/files",
                related: "http://localhostx:3000/api/task/29/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 30,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 30,
            task_name: "FlooringInstall",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/30",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/30/relationships/project",
                related: "http://localhostx:3000/api/task/30/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/30/relationships/task_codes",
                related: "http://localhostx:3000/api/task/30/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 30,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/30/relationships/task_owner",
                related: "http://localhostx:3000/api/task/30/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/30/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/30/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/30/relationships/punch_list",
                related: "http://localhostx:3000/api/task/30/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/30/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/30/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/30/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/30/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/30/relationships/bids",
                related: "http://localhostx:3000/api/task/30/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/30/relationships/files",
                related: "http://localhostx:3000/api/task/30/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 31,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 31,
            task_name: "Landscaping/FinishGrade",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/31",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/31/relationships/project",
                related: "http://localhostx:3000/api/task/31/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/31/relationships/task_codes",
                related: "http://localhostx:3000/api/task/31/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 31,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/31/relationships/task_owner",
                related: "http://localhostx:3000/api/task/31/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/31/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/31/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/31/relationships/punch_list",
                related: "http://localhostx:3000/api/task/31/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/31/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/31/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/31/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/31/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/31/relationships/bids",
                related: "http://localhostx:3000/api/task/31/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/31/relationships/files",
                related: "http://localhostx:3000/api/task/31/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 32,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 32,
            task_name: "CountertopInstall",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/32",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/32/relationships/project",
                related: "http://localhostx:3000/api/task/32/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/32/relationships/task_codes",
                related: "http://localhostx:3000/api/task/32/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 32,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/32/relationships/task_owner",
                related: "http://localhostx:3000/api/task/32/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/32/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/32/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/32/relationships/punch_list",
                related: "http://localhostx:3000/api/task/32/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/32/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/32/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/32/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/32/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/32/relationships/bids",
                related: "http://localhostx:3000/api/task/32/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/32/relationships/files",
                related: "http://localhostx:3000/api/task/32/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 33,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 33,
            task_name: "HVACTrimOut",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/33",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/33/relationships/project",
                related: "http://localhostx:3000/api/task/33/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/33/relationships/task_codes",
                related: "http://localhostx:3000/api/task/33/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 33,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/33/relationships/task_owner",
                related: "http://localhostx:3000/api/task/33/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/33/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/33/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/33/relationships/punch_list",
                related: "http://localhostx:3000/api/task/33/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/33/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/33/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/33/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/33/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/33/relationships/bids",
                related: "http://localhostx:3000/api/task/33/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/33/relationships/files",
                related: "http://localhostx:3000/api/task/33/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 34,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 34,
            task_name: "LightFixtureInstall",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/34",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/34/relationships/project",
                related: "http://localhostx:3000/api/task/34/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/34/relationships/task_codes",
                related: "http://localhostx:3000/api/task/34/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 34,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/34/relationships/task_owner",
                related: "http://localhostx:3000/api/task/34/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/34/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/34/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/34/relationships/punch_list",
                related: "http://localhostx:3000/api/task/34/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/34/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/34/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/34/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/34/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/34/relationships/bids",
                related: "http://localhostx:3000/api/task/34/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/34/relationships/files",
                related: "http://localhostx:3000/api/task/34/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 35,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 35,
            task_name: "PlumbingFixtureInstall",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/35",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/35/relationships/project",
                related: "http://localhostx:3000/api/task/35/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/35/relationships/task_codes",
                related: "http://localhostx:3000/api/task/35/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 35,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/35/relationships/task_owner",
                related: "http://localhostx:3000/api/task/35/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/35/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/35/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/35/relationships/punch_list",
                related: "http://localhostx:3000/api/task/35/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/35/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/35/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/35/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/35/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/35/relationships/bids",
                related: "http://localhostx:3000/api/task/35/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/35/relationships/files",
                related: "http://localhostx:3000/api/task/35/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 36,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 36,
            task_name: "Decks,Porches,Railings",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/36",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/36/relationships/project",
                related: "http://localhostx:3000/api/task/36/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/36/relationships/task_codes",
                related: "http://localhostx:3000/api/task/36/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 36,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/36/relationships/task_owner",
                related: "http://localhostx:3000/api/task/36/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/36/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/36/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/36/relationships/punch_list",
                related: "http://localhostx:3000/api/task/36/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/36/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/36/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/36/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/36/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/36/relationships/bids",
                related: "http://localhostx:3000/api/task/36/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/36/relationships/files",
                related: "http://localhostx:3000/api/task/36/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 37,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 37,
            task_name: "ElectricalTrimOut",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/37",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/37/relationships/project",
                related: "http://localhostx:3000/api/task/37/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/37/relationships/task_codes",
                related: "http://localhostx:3000/api/task/37/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 37,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/37/relationships/task_owner",
                related: "http://localhostx:3000/api/task/37/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/37/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/37/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/37/relationships/punch_list",
                related: "http://localhostx:3000/api/task/37/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/37/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/37/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/37/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/37/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/37/relationships/bids",
                related: "http://localhostx:3000/api/task/37/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/37/relationships/files",
                related: "http://localhostx:3000/api/task/37/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 38,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 38,
            task_name: "InteriorHardwareInstall",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/38",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/38/relationships/project",
                related: "http://localhostx:3000/api/task/38/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/38/relationships/task_codes",
                related: "http://localhostx:3000/api/task/38/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 38,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/38/relationships/task_owner",
                related: "http://localhostx:3000/api/task/38/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/38/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/38/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/38/relationships/punch_list",
                related: "http://localhostx:3000/api/task/38/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/38/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/38/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/38/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/38/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/38/relationships/bids",
                related: "http://localhostx:3000/api/task/38/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/38/relationships/files",
                related: "http://localhostx:3000/api/task/38/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 39,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 39,
            task_name: "Fences/Gates",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/39",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/39/relationships/project",
                related: "http://localhostx:3000/api/task/39/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/39/relationships/task_codes",
                related: "http://localhostx:3000/api/task/39/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 39,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/39/relationships/task_owner",
                related: "http://localhostx:3000/api/task/39/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/39/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/39/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/39/relationships/punch_list",
                related: "http://localhostx:3000/api/task/39/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/39/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/39/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/39/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/39/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/39/relationships/bids",
                related: "http://localhostx:3000/api/task/39/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/39/relationships/files",
                related: "http://localhostx:3000/api/task/39/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 40,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 40,
            task_name: "FinishTrim",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/40",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/40/relationships/project",
                related: "http://localhostx:3000/api/task/40/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/40/relationships/task_codes",
                related: "http://localhostx:3000/api/task/40/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 40,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/40/relationships/task_owner",
                related: "http://localhostx:3000/api/task/40/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/40/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/40/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/40/relationships/punch_list",
                related: "http://localhostx:3000/api/task/40/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/40/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/40/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/40/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/40/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/40/relationships/bids",
                related: "http://localhostx:3000/api/task/40/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/40/relationships/files",
                related: "http://localhostx:3000/api/task/40/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 41,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 41,
            task_name: "Mirrors/Glass",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/41",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/41/relationships/project",
                related: "http://localhostx:3000/api/task/41/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/41/relationships/task_codes",
                related: "http://localhostx:3000/api/task/41/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 41,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/41/relationships/task_owner",
                related: "http://localhostx:3000/api/task/41/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/41/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/41/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/41/relationships/punch_list",
                related: "http://localhostx:3000/api/task/41/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/41/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/41/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/41/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/41/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/41/relationships/bids",
                related: "http://localhostx:3000/api/task/41/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/41/relationships/files",
                related: "http://localhostx:3000/api/task/41/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 42,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 42,
            task_name: "ApplianceInstallation",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/42",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/42/relationships/project",
                related: "http://localhostx:3000/api/task/42/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/42/relationships/task_codes",
                related: "http://localhostx:3000/api/task/42/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 42,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/42/relationships/task_owner",
                related: "http://localhostx:3000/api/task/42/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/42/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/42/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/42/relationships/punch_list",
                related: "http://localhostx:3000/api/task/42/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/42/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/42/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/42/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/42/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/42/relationships/bids",
                related: "http://localhostx:3000/api/task/42/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/42/relationships/files",
                related: "http://localhostx:3000/api/task/42/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 43,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 43,
            task_name: "RoughPunchout",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/43",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/43/relationships/project",
                related: "http://localhostx:3000/api/task/43/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/43/relationships/task_codes",
                related: "http://localhostx:3000/api/task/43/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 43,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/43/relationships/task_owner",
                related: "http://localhostx:3000/api/task/43/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/43/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/43/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/43/relationships/punch_list",
                related: "http://localhostx:3000/api/task/43/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/43/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/43/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/43/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/43/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/43/relationships/bids",
                related: "http://localhostx:3000/api/task/43/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/43/relationships/files",
                related: "http://localhostx:3000/api/task/43/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 44,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 44,
            task_name: "Finaltouchup,punchout,clean.",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/44",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/44/relationships/project",
                related: "http://localhostx:3000/api/task/44/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/44/relationships/task_codes",
                related: "http://localhostx:3000/api/task/44/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 44,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/44/relationships/task_owner",
                related: "http://localhostx:3000/api/task/44/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/44/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/44/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/44/relationships/punch_list",
                related: "http://localhostx:3000/api/task/44/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/44/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/44/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/44/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/44/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/44/relationships/bids",
                related: "http://localhostx:3000/api/task/44/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/44/relationships/files",
                related: "http://localhostx:3000/api/task/44/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 45,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 45,
            task_name: "WellInstall",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/45",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/45/relationships/project",
                related: "http://localhostx:3000/api/task/45/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/45/relationships/task_codes",
                related: "http://localhostx:3000/api/task/45/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 45,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/45/relationships/task_owner",
                related: "http://localhostx:3000/api/task/45/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/45/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/45/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/45/relationships/punch_list",
                related: "http://localhostx:3000/api/task/45/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/45/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/45/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/45/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/45/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/45/relationships/bids",
                related: "http://localhostx:3000/api/task/45/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/45/relationships/files",
                related: "http://localhostx:3000/api/task/45/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 46,
          attributes: {
            created_at: "2024-05-21T17:15:39.986Z",
            updated_at: "2024-05-21T17:15:39.986Z",
            active: true,
            project_id: 200001,
            task_code_id: 46,
            task_name: "SepticInstall",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/46",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/46/relationships/project",
                related: "http://localhostx:3000/api/task/46/project",
              },
              data: {
                type: "project",
                id: 200001,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/46/relationships/task_codes",
                related: "http://localhostx:3000/api/task/46/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 46,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/46/relationships/task_owner",
                related: "http://localhostx:3000/api/task/46/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/46/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/46/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/46/relationships/punch_list",
                related: "http://localhostx:3000/api/task/46/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/46/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/46/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/46/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/46/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/46/relationships/bids",
                related: "http://localhostx:3000/api/task/46/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/46/relationships/files",
                related: "http://localhostx:3000/api/task/46/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 47,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 1,
            task_name: "Architectural",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/47",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/47/relationships/project",
                related: "http://localhostx:3000/api/task/47/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/47/relationships/task_codes",
                related: "http://localhostx:3000/api/task/47/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 1,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/47/relationships/task_owner",
                related: "http://localhostx:3000/api/task/47/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/47/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/47/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/47/relationships/punch_list",
                related: "http://localhostx:3000/api/task/47/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/47/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/47/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/47/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/47/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/47/relationships/bids",
                related: "http://localhostx:3000/api/task/47/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/47/relationships/files",
                related: "http://localhostx:3000/api/task/47/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 48,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 2,
            task_name: "PurchaseBuildersRiskInsurance",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/48",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/48/relationships/project",
                related: "http://localhostx:3000/api/task/48/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/48/relationships/task_codes",
                related: "http://localhostx:3000/api/task/48/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 2,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/48/relationships/task_owner",
                related: "http://localhostx:3000/api/task/48/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/48/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/48/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/48/relationships/punch_list",
                related: "http://localhostx:3000/api/task/48/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/48/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/48/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/48/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/48/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/48/relationships/bids",
                related: "http://localhostx:3000/api/task/48/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/48/relationships/files",
                related: "http://localhostx:3000/api/task/48/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 49,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 3,
            task_name: "EngineeringDesign",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/49",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/49/relationships/project",
                related: "http://localhostx:3000/api/task/49/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/49/relationships/task_codes",
                related: "http://localhostx:3000/api/task/49/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 3,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/49/relationships/task_owner",
                related: "http://localhostx:3000/api/task/49/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/49/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/49/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/49/relationships/punch_list",
                related: "http://localhostx:3000/api/task/49/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/49/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/49/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/49/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/49/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/49/relationships/bids",
                related: "http://localhostx:3000/api/task/49/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/49/relationships/files",
                related: "http://localhostx:3000/api/task/49/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 50,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 4,
            task_name: "Permitting/Preliminary",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/50",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/50/relationships/project",
                related: "http://localhostx:3000/api/task/50/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/50/relationships/task_codes",
                related: "http://localhostx:3000/api/task/50/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 4,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/50/relationships/task_owner",
                related: "http://localhostx:3000/api/task/50/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/50/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/50/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/50/relationships/punch_list",
                related: "http://localhostx:3000/api/task/50/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/50/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/50/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/50/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/50/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/50/relationships/bids",
                related: "http://localhostx:3000/api/task/50/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/50/relationships/files",
                related: "http://localhostx:3000/api/task/50/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 51,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 5,
            task_name: "Clearing-SiteWork",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/51",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/51/relationships/project",
                related: "http://localhostx:3000/api/task/51/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/51/relationships/task_codes",
                related: "http://localhostx:3000/api/task/51/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 5,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/51/relationships/task_owner",
                related: "http://localhostx:3000/api/task/51/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/51/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/51/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/51/relationships/punch_list",
                related: "http://localhostx:3000/api/task/51/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/51/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/51/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/51/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/51/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/51/relationships/bids",
                related: "http://localhostx:3000/api/task/51/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/51/relationships/files",
                related: "http://localhostx:3000/api/task/51/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 52,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 6,
            task_name: "Excavation",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/52",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/52/relationships/project",
                related: "http://localhostx:3000/api/task/52/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/52/relationships/task_codes",
                related: "http://localhostx:3000/api/task/52/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 6,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/52/relationships/task_owner",
                related: "http://localhostx:3000/api/task/52/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/52/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/52/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/52/relationships/punch_list",
                related: "http://localhostx:3000/api/task/52/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/52/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/52/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/52/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/52/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/52/relationships/bids",
                related: "http://localhostx:3000/api/task/52/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/52/relationships/files",
                related: "http://localhostx:3000/api/task/52/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 53,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 7,
            task_name: "Footings",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/53",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/53/relationships/project",
                related: "http://localhostx:3000/api/task/53/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/53/relationships/task_codes",
                related: "http://localhostx:3000/api/task/53/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 7,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/53/relationships/task_owner",
                related: "http://localhostx:3000/api/task/53/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/53/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/53/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/53/relationships/punch_list",
                related: "http://localhostx:3000/api/task/53/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/53/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/53/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/53/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/53/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/53/relationships/bids",
                related: "http://localhostx:3000/api/task/53/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/53/relationships/files",
                related: "http://localhostx:3000/api/task/53/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 54,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 8,
            task_name: "UndergroundPlumbing",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/54",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/54/relationships/project",
                related: "http://localhostx:3000/api/task/54/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/54/relationships/task_codes",
                related: "http://localhostx:3000/api/task/54/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 8,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/54/relationships/task_owner",
                related: "http://localhostx:3000/api/task/54/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/54/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/54/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/54/relationships/punch_list",
                related: "http://localhostx:3000/api/task/54/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/54/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/54/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/54/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/54/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/54/relationships/bids",
                related: "http://localhostx:3000/api/task/54/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/54/relationships/files",
                related: "http://localhostx:3000/api/task/54/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 55,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 9,
            task_name: "UndergroundElectrical",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/55",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/55/relationships/project",
                related: "http://localhostx:3000/api/task/55/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/55/relationships/task_codes",
                related: "http://localhostx:3000/api/task/55/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 9,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/55/relationships/task_owner",
                related: "http://localhostx:3000/api/task/55/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/55/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/55/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/55/relationships/punch_list",
                related: "http://localhostx:3000/api/task/55/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/55/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/55/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/55/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/55/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/55/relationships/bids",
                related: "http://localhostx:3000/api/task/55/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/55/relationships/files",
                related: "http://localhostx:3000/api/task/55/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 56,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 10,
            task_name: "Foundation",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/56",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/56/relationships/project",
                related: "http://localhostx:3000/api/task/56/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/56/relationships/task_codes",
                related: "http://localhostx:3000/api/task/56/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 10,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/56/relationships/task_owner",
                related: "http://localhostx:3000/api/task/56/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/56/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/56/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/56/relationships/punch_list",
                related: "http://localhostx:3000/api/task/56/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/56/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/56/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/56/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/56/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/56/relationships/bids",
                related: "http://localhostx:3000/api/task/56/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/56/relationships/files",
                related: "http://localhostx:3000/api/task/56/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 57,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 11,
            task_name: "Framing",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/57",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/57/relationships/project",
                related: "http://localhostx:3000/api/task/57/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/57/relationships/task_codes",
                related: "http://localhostx:3000/api/task/57/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 11,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/57/relationships/task_owner",
                related: "http://localhostx:3000/api/task/57/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/57/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/57/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/57/relationships/punch_list",
                related: "http://localhostx:3000/api/task/57/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/57/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/57/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/57/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/57/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/57/relationships/bids",
                related: "http://localhostx:3000/api/task/57/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/57/relationships/files",
                related: "http://localhostx:3000/api/task/57/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 58,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 12,
            task_name: "HVACRoughIn",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/58",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/58/relationships/project",
                related: "http://localhostx:3000/api/task/58/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/58/relationships/task_codes",
                related: "http://localhostx:3000/api/task/58/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 12,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/58/relationships/task_owner",
                related: "http://localhostx:3000/api/task/58/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/58/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/58/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/58/relationships/punch_list",
                related: "http://localhostx:3000/api/task/58/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/58/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/58/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/58/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/58/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/58/relationships/bids",
                related: "http://localhostx:3000/api/task/58/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/58/relationships/files",
                related: "http://localhostx:3000/api/task/58/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 59,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 13,
            task_name: "PlumbingRoughIn",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/59",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/59/relationships/project",
                related: "http://localhostx:3000/api/task/59/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/59/relationships/task_codes",
                related: "http://localhostx:3000/api/task/59/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 13,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/59/relationships/task_owner",
                related: "http://localhostx:3000/api/task/59/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/59/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/59/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/59/relationships/punch_list",
                related: "http://localhostx:3000/api/task/59/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/59/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/59/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/59/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/59/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/59/relationships/bids",
                related: "http://localhostx:3000/api/task/59/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/59/relationships/files",
                related: "http://localhostx:3000/api/task/59/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 60,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 14,
            task_name: "ElectricalRoughIn",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/60",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/60/relationships/project",
                related: "http://localhostx:3000/api/task/60/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/60/relationships/task_codes",
                related: "http://localhostx:3000/api/task/60/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 14,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/60/relationships/task_owner",
                related: "http://localhostx:3000/api/task/60/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/60/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/60/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/60/relationships/punch_list",
                related: "http://localhostx:3000/api/task/60/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/60/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/60/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/60/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/60/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/60/relationships/bids",
                related: "http://localhostx:3000/api/task/60/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/60/relationships/files",
                related: "http://localhostx:3000/api/task/60/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 61,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 15,
            task_name: "ApplySheathing",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/61",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/61/relationships/project",
                related: "http://localhostx:3000/api/task/61/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/61/relationships/task_codes",
                related: "http://localhostx:3000/api/task/61/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 15,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/61/relationships/task_owner",
                related: "http://localhostx:3000/api/task/61/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/61/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/61/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/61/relationships/punch_list",
                related: "http://localhostx:3000/api/task/61/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/61/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/61/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/61/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/61/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/61/relationships/bids",
                related: "http://localhostx:3000/api/task/61/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/61/relationships/files",
                related: "http://localhostx:3000/api/task/61/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 62,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 16,
            task_name: "Roofing",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/62",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/62/relationships/project",
                related: "http://localhostx:3000/api/task/62/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/62/relationships/task_codes",
                related: "http://localhostx:3000/api/task/62/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 16,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/62/relationships/task_owner",
                related: "http://localhostx:3000/api/task/62/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/62/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/62/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/62/relationships/punch_list",
                related: "http://localhostx:3000/api/task/62/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/62/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/62/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/62/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/62/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/62/relationships/bids",
                related: "http://localhostx:3000/api/task/62/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/62/relationships/files",
                related: "http://localhostx:3000/api/task/62/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 63,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 17,
            task_name: "HouseWrap",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/63",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/63/relationships/project",
                related: "http://localhostx:3000/api/task/63/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/63/relationships/task_codes",
                related: "http://localhostx:3000/api/task/63/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 17,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/63/relationships/task_owner",
                related: "http://localhostx:3000/api/task/63/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/63/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/63/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/63/relationships/punch_list",
                related: "http://localhostx:3000/api/task/63/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/63/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/63/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/63/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/63/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/63/relationships/bids",
                related: "http://localhostx:3000/api/task/63/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/63/relationships/files",
                related: "http://localhostx:3000/api/task/63/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 64,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 18,
            task_name: "DoorsInstall-Exterior",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/64",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/64/relationships/project",
                related: "http://localhostx:3000/api/task/64/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/64/relationships/task_codes",
                related: "http://localhostx:3000/api/task/64/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 18,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/64/relationships/task_owner",
                related: "http://localhostx:3000/api/task/64/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/64/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/64/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/64/relationships/punch_list",
                related: "http://localhostx:3000/api/task/64/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/64/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/64/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/64/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/64/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/64/relationships/bids",
                related: "http://localhostx:3000/api/task/64/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/64/relationships/files",
                related: "http://localhostx:3000/api/task/64/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 65,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 19,
            task_name: "WindowsInstall",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/65",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/65/relationships/project",
                related: "http://localhostx:3000/api/task/65/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/65/relationships/task_codes",
                related: "http://localhostx:3000/api/task/65/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 19,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/65/relationships/task_owner",
                related: "http://localhostx:3000/api/task/65/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/65/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/65/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/65/relationships/punch_list",
                related: "http://localhostx:3000/api/task/65/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/65/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/65/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/65/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/65/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/65/relationships/bids",
                related: "http://localhostx:3000/api/task/65/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/65/relationships/files",
                related: "http://localhostx:3000/api/task/65/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 66,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 20,
            task_name: "ExteriorMasonry",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/66",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/66/relationships/project",
                related: "http://localhostx:3000/api/task/66/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/66/relationships/task_codes",
                related: "http://localhostx:3000/api/task/66/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 20,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/66/relationships/task_owner",
                related: "http://localhostx:3000/api/task/66/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/66/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/66/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/66/relationships/punch_list",
                related: "http://localhostx:3000/api/task/66/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/66/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/66/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/66/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/66/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/66/relationships/bids",
                related: "http://localhostx:3000/api/task/66/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/66/relationships/files",
                related: "http://localhostx:3000/api/task/66/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 67,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 21,
            task_name: "SidingInstall",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/67",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/67/relationships/project",
                related: "http://localhostx:3000/api/task/67/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/67/relationships/task_codes",
                related: "http://localhostx:3000/api/task/67/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 21,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/67/relationships/task_owner",
                related: "http://localhostx:3000/api/task/67/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/67/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/67/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/67/relationships/punch_list",
                related: "http://localhostx:3000/api/task/67/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/67/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/67/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/67/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/67/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/67/relationships/bids",
                related: "http://localhostx:3000/api/task/67/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/67/relationships/files",
                related: "http://localhostx:3000/api/task/67/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 68,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 22,
            task_name: "Insulation",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/68",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/68/relationships/project",
                related: "http://localhostx:3000/api/task/68/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/68/relationships/task_codes",
                related: "http://localhostx:3000/api/task/68/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 22,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/68/relationships/task_owner",
                related: "http://localhostx:3000/api/task/68/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/68/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/68/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/68/relationships/punch_list",
                related: "http://localhostx:3000/api/task/68/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/68/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/68/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/68/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/68/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/68/relationships/bids",
                related: "http://localhostx:3000/api/task/68/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/68/relationships/files",
                related: "http://localhostx:3000/api/task/68/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 69,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 23,
            task_name: "Drywall",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/69",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/69/relationships/project",
                related: "http://localhostx:3000/api/task/69/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/69/relationships/task_codes",
                related: "http://localhostx:3000/api/task/69/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 23,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/69/relationships/task_owner",
                related: "http://localhostx:3000/api/task/69/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/69/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/69/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/69/relationships/punch_list",
                related: "http://localhostx:3000/api/task/69/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/69/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/69/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/69/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/69/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/69/relationships/bids",
                related: "http://localhostx:3000/api/task/69/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/69/relationships/files",
                related: "http://localhostx:3000/api/task/69/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 70,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 24,
            task_name: "Prime/PaintInterior/Exterior",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/70",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/70/relationships/project",
                related: "http://localhostx:3000/api/task/70/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/70/relationships/task_codes",
                related: "http://localhostx:3000/api/task/70/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 24,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/70/relationships/task_owner",
                related: "http://localhostx:3000/api/task/70/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/70/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/70/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/70/relationships/punch_list",
                related: "http://localhostx:3000/api/task/70/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/70/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/70/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/70/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/70/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/70/relationships/bids",
                related: "http://localhostx:3000/api/task/70/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/70/relationships/files",
                related: "http://localhostx:3000/api/task/70/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 71,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 25,
            task_name: "CabinetInstall",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/71",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/71/relationships/project",
                related: "http://localhostx:3000/api/task/71/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/71/relationships/task_codes",
                related: "http://localhostx:3000/api/task/71/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 25,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/71/relationships/task_owner",
                related: "http://localhostx:3000/api/task/71/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/71/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/71/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/71/relationships/punch_list",
                related: "http://localhostx:3000/api/task/71/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/71/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/71/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/71/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/71/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/71/relationships/bids",
                related: "http://localhostx:3000/api/task/71/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/71/relationships/files",
                related: "http://localhostx:3000/api/task/71/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 72,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 26,
            task_name: "InteriorMillwork",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/72",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/72/relationships/project",
                related: "http://localhostx:3000/api/task/72/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/72/relationships/task_codes",
                related: "http://localhostx:3000/api/task/72/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 26,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/72/relationships/task_owner",
                related: "http://localhostx:3000/api/task/72/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/72/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/72/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/72/relationships/punch_list",
                related: "http://localhostx:3000/api/task/72/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/72/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/72/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/72/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/72/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/72/relationships/bids",
                related: "http://localhostx:3000/api/task/72/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/72/relationships/files",
                related: "http://localhostx:3000/api/task/72/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 73,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 27,
            task_name: "Painting-Exterior",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/73",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/73/relationships/project",
                related: "http://localhostx:3000/api/task/73/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/73/relationships/task_codes",
                related: "http://localhostx:3000/api/task/73/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 27,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/73/relationships/task_owner",
                related: "http://localhostx:3000/api/task/73/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/73/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/73/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/73/relationships/punch_list",
                related: "http://localhostx:3000/api/task/73/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/73/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/73/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/73/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/73/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/73/relationships/bids",
                related: "http://localhostx:3000/api/task/73/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/73/relationships/files",
                related: "http://localhostx:3000/api/task/73/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 74,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 28,
            task_name: "Painting-Interior",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/74",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/74/relationships/project",
                related: "http://localhostx:3000/api/task/74/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/74/relationships/task_codes",
                related: "http://localhostx:3000/api/task/74/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 28,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/74/relationships/task_owner",
                related: "http://localhostx:3000/api/task/74/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/74/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/74/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/74/relationships/punch_list",
                related: "http://localhostx:3000/api/task/74/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/74/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/74/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/74/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/74/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/74/relationships/bids",
                related: "http://localhostx:3000/api/task/74/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/74/relationships/files",
                related: "http://localhostx:3000/api/task/74/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 75,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 29,
            task_name: "ExteriorFlatwork",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/75",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/75/relationships/project",
                related: "http://localhostx:3000/api/task/75/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/75/relationships/task_codes",
                related: "http://localhostx:3000/api/task/75/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 29,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/75/relationships/task_owner",
                related: "http://localhostx:3000/api/task/75/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/75/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/75/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/75/relationships/punch_list",
                related: "http://localhostx:3000/api/task/75/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/75/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/75/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/75/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/75/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/75/relationships/bids",
                related: "http://localhostx:3000/api/task/75/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/75/relationships/files",
                related: "http://localhostx:3000/api/task/75/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 76,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 30,
            task_name: "FlooringInstall",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/76",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/76/relationships/project",
                related: "http://localhostx:3000/api/task/76/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/76/relationships/task_codes",
                related: "http://localhostx:3000/api/task/76/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 30,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/76/relationships/task_owner",
                related: "http://localhostx:3000/api/task/76/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/76/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/76/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/76/relationships/punch_list",
                related: "http://localhostx:3000/api/task/76/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/76/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/76/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/76/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/76/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/76/relationships/bids",
                related: "http://localhostx:3000/api/task/76/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/76/relationships/files",
                related: "http://localhostx:3000/api/task/76/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 77,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 31,
            task_name: "Landscaping/FinishGrade",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/77",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/77/relationships/project",
                related: "http://localhostx:3000/api/task/77/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/77/relationships/task_codes",
                related: "http://localhostx:3000/api/task/77/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 31,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/77/relationships/task_owner",
                related: "http://localhostx:3000/api/task/77/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/77/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/77/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/77/relationships/punch_list",
                related: "http://localhostx:3000/api/task/77/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/77/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/77/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/77/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/77/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/77/relationships/bids",
                related: "http://localhostx:3000/api/task/77/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/77/relationships/files",
                related: "http://localhostx:3000/api/task/77/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 78,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 32,
            task_name: "CountertopInstall",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/78",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/78/relationships/project",
                related: "http://localhostx:3000/api/task/78/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/78/relationships/task_codes",
                related: "http://localhostx:3000/api/task/78/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 32,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/78/relationships/task_owner",
                related: "http://localhostx:3000/api/task/78/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/78/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/78/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/78/relationships/punch_list",
                related: "http://localhostx:3000/api/task/78/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/78/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/78/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/78/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/78/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/78/relationships/bids",
                related: "http://localhostx:3000/api/task/78/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/78/relationships/files",
                related: "http://localhostx:3000/api/task/78/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 79,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 33,
            task_name: "HVACTrimOut",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/79",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/79/relationships/project",
                related: "http://localhostx:3000/api/task/79/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/79/relationships/task_codes",
                related: "http://localhostx:3000/api/task/79/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 33,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/79/relationships/task_owner",
                related: "http://localhostx:3000/api/task/79/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/79/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/79/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/79/relationships/punch_list",
                related: "http://localhostx:3000/api/task/79/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/79/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/79/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/79/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/79/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/79/relationships/bids",
                related: "http://localhostx:3000/api/task/79/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/79/relationships/files",
                related: "http://localhostx:3000/api/task/79/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 80,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 34,
            task_name: "LightFixtureInstall",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/80",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/80/relationships/project",
                related: "http://localhostx:3000/api/task/80/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/80/relationships/task_codes",
                related: "http://localhostx:3000/api/task/80/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 34,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/80/relationships/task_owner",
                related: "http://localhostx:3000/api/task/80/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/80/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/80/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/80/relationships/punch_list",
                related: "http://localhostx:3000/api/task/80/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/80/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/80/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/80/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/80/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/80/relationships/bids",
                related: "http://localhostx:3000/api/task/80/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/80/relationships/files",
                related: "http://localhostx:3000/api/task/80/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 81,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 35,
            task_name: "PlumbingFixtureInstall",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/81",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/81/relationships/project",
                related: "http://localhostx:3000/api/task/81/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/81/relationships/task_codes",
                related: "http://localhostx:3000/api/task/81/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 35,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/81/relationships/task_owner",
                related: "http://localhostx:3000/api/task/81/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/81/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/81/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/81/relationships/punch_list",
                related: "http://localhostx:3000/api/task/81/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/81/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/81/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/81/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/81/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/81/relationships/bids",
                related: "http://localhostx:3000/api/task/81/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/81/relationships/files",
                related: "http://localhostx:3000/api/task/81/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 82,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 36,
            task_name: "Decks,Porches,Railings",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/82",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/82/relationships/project",
                related: "http://localhostx:3000/api/task/82/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/82/relationships/task_codes",
                related: "http://localhostx:3000/api/task/82/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 36,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/82/relationships/task_owner",
                related: "http://localhostx:3000/api/task/82/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/82/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/82/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/82/relationships/punch_list",
                related: "http://localhostx:3000/api/task/82/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/82/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/82/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/82/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/82/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/82/relationships/bids",
                related: "http://localhostx:3000/api/task/82/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/82/relationships/files",
                related: "http://localhostx:3000/api/task/82/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 83,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 37,
            task_name: "ElectricalTrimOut",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/83",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/83/relationships/project",
                related: "http://localhostx:3000/api/task/83/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/83/relationships/task_codes",
                related: "http://localhostx:3000/api/task/83/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 37,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/83/relationships/task_owner",
                related: "http://localhostx:3000/api/task/83/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/83/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/83/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/83/relationships/punch_list",
                related: "http://localhostx:3000/api/task/83/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/83/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/83/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/83/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/83/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/83/relationships/bids",
                related: "http://localhostx:3000/api/task/83/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/83/relationships/files",
                related: "http://localhostx:3000/api/task/83/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 84,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 38,
            task_name: "InteriorHardwareInstall",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/84",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/84/relationships/project",
                related: "http://localhostx:3000/api/task/84/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/84/relationships/task_codes",
                related: "http://localhostx:3000/api/task/84/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 38,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/84/relationships/task_owner",
                related: "http://localhostx:3000/api/task/84/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/84/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/84/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/84/relationships/punch_list",
                related: "http://localhostx:3000/api/task/84/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/84/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/84/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/84/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/84/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/84/relationships/bids",
                related: "http://localhostx:3000/api/task/84/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/84/relationships/files",
                related: "http://localhostx:3000/api/task/84/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 85,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 39,
            task_name: "Fences/Gates",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/85",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/85/relationships/project",
                related: "http://localhostx:3000/api/task/85/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/85/relationships/task_codes",
                related: "http://localhostx:3000/api/task/85/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 39,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/85/relationships/task_owner",
                related: "http://localhostx:3000/api/task/85/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/85/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/85/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/85/relationships/punch_list",
                related: "http://localhostx:3000/api/task/85/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/85/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/85/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/85/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/85/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/85/relationships/bids",
                related: "http://localhostx:3000/api/task/85/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/85/relationships/files",
                related: "http://localhostx:3000/api/task/85/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 86,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 40,
            task_name: "FinishTrim",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/86",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/86/relationships/project",
                related: "http://localhostx:3000/api/task/86/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/86/relationships/task_codes",
                related: "http://localhostx:3000/api/task/86/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 40,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/86/relationships/task_owner",
                related: "http://localhostx:3000/api/task/86/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/86/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/86/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/86/relationships/punch_list",
                related: "http://localhostx:3000/api/task/86/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/86/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/86/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/86/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/86/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/86/relationships/bids",
                related: "http://localhostx:3000/api/task/86/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/86/relationships/files",
                related: "http://localhostx:3000/api/task/86/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 87,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 41,
            task_name: "Mirrors/Glass",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/87",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/87/relationships/project",
                related: "http://localhostx:3000/api/task/87/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/87/relationships/task_codes",
                related: "http://localhostx:3000/api/task/87/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 41,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/87/relationships/task_owner",
                related: "http://localhostx:3000/api/task/87/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/87/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/87/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/87/relationships/punch_list",
                related: "http://localhostx:3000/api/task/87/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/87/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/87/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/87/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/87/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/87/relationships/bids",
                related: "http://localhostx:3000/api/task/87/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/87/relationships/files",
                related: "http://localhostx:3000/api/task/87/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 88,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 42,
            task_name: "ApplianceInstallation",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/88",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/88/relationships/project",
                related: "http://localhostx:3000/api/task/88/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/88/relationships/task_codes",
                related: "http://localhostx:3000/api/task/88/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 42,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/88/relationships/task_owner",
                related: "http://localhostx:3000/api/task/88/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/88/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/88/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/88/relationships/punch_list",
                related: "http://localhostx:3000/api/task/88/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/88/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/88/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/88/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/88/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/88/relationships/bids",
                related: "http://localhostx:3000/api/task/88/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/88/relationships/files",
                related: "http://localhostx:3000/api/task/88/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 89,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 43,
            task_name: "RoughPunchout",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/89",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/89/relationships/project",
                related: "http://localhostx:3000/api/task/89/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/89/relationships/task_codes",
                related: "http://localhostx:3000/api/task/89/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 43,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/89/relationships/task_owner",
                related: "http://localhostx:3000/api/task/89/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/89/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/89/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/89/relationships/punch_list",
                related: "http://localhostx:3000/api/task/89/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/89/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/89/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/89/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/89/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/89/relationships/bids",
                related: "http://localhostx:3000/api/task/89/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/89/relationships/files",
                related: "http://localhostx:3000/api/task/89/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 90,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 44,
            task_name: "Finaltouchup,punchout,clean.",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/90",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/90/relationships/project",
                related: "http://localhostx:3000/api/task/90/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/90/relationships/task_codes",
                related: "http://localhostx:3000/api/task/90/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 44,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/90/relationships/task_owner",
                related: "http://localhostx:3000/api/task/90/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/90/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/90/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/90/relationships/punch_list",
                related: "http://localhostx:3000/api/task/90/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/90/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/90/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/90/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/90/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/90/relationships/bids",
                related: "http://localhostx:3000/api/task/90/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/90/relationships/files",
                related: "http://localhostx:3000/api/task/90/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 91,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 45,
            task_name: "WellInstall",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/91",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/91/relationships/project",
                related: "http://localhostx:3000/api/task/91/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/91/relationships/task_codes",
                related: "http://localhostx:3000/api/task/91/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 45,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/91/relationships/task_owner",
                related: "http://localhostx:3000/api/task/91/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/91/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/91/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/91/relationships/punch_list",
                related: "http://localhostx:3000/api/task/91/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/91/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/91/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/91/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/91/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/91/relationships/bids",
                related: "http://localhostx:3000/api/task/91/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/91/relationships/files",
                related: "http://localhostx:3000/api/task/91/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 92,
          attributes: {
            created_at: "2024-05-21T17:15:40.203Z",
            updated_at: "2024-05-21T17:15:40.203Z",
            active: true,
            project_id: 200002,
            task_code_id: 46,
            task_name: "SepticInstall",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/92",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/92/relationships/project",
                related: "http://localhostx:3000/api/task/92/project",
              },
              data: {
                type: "project",
                id: 200002,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/92/relationships/task_codes",
                related: "http://localhostx:3000/api/task/92/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 46,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/92/relationships/task_owner",
                related: "http://localhostx:3000/api/task/92/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/92/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/92/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/92/relationships/punch_list",
                related: "http://localhostx:3000/api/task/92/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/92/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/92/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/92/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/92/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/92/relationships/bids",
                related: "http://localhostx:3000/api/task/92/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/92/relationships/files",
                related: "http://localhostx:3000/api/task/92/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 93,
          attributes: {
            created_at: "2024-05-21T17:15:40.415Z",
            updated_at: "2024-05-21T17:15:40.415Z",
            active: true,
            project_id: 200003,
            task_code_id: 1,
            task_name: "Architectural",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/93",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/93/relationships/project",
                related: "http://localhostx:3000/api/task/93/project",
              },
              data: {
                type: "project",
                id: 200003,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/93/relationships/task_codes",
                related: "http://localhostx:3000/api/task/93/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 1,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/93/relationships/task_owner",
                related: "http://localhostx:3000/api/task/93/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/93/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/93/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/93/relationships/punch_list",
                related: "http://localhostx:3000/api/task/93/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/93/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/93/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/93/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/93/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/93/relationships/bids",
                related: "http://localhostx:3000/api/task/93/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/93/relationships/files",
                related: "http://localhostx:3000/api/task/93/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 94,
          attributes: {
            created_at: "2024-05-21T17:15:40.415Z",
            updated_at: "2024-05-21T17:15:40.415Z",
            active: true,
            project_id: 200003,
            task_code_id: 2,
            task_name: "PurchaseBuildersRiskInsurance",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/94",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/94/relationships/project",
                related: "http://localhostx:3000/api/task/94/project",
              },
              data: {
                type: "project",
                id: 200003,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/94/relationships/task_codes",
                related: "http://localhostx:3000/api/task/94/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 2,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/94/relationships/task_owner",
                related: "http://localhostx:3000/api/task/94/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/94/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/94/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/94/relationships/punch_list",
                related: "http://localhostx:3000/api/task/94/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/94/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/94/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/94/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/94/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/94/relationships/bids",
                related: "http://localhostx:3000/api/task/94/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/94/relationships/files",
                related: "http://localhostx:3000/api/task/94/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 95,
          attributes: {
            created_at: "2024-05-21T17:15:40.415Z",
            updated_at: "2024-05-21T17:15:40.415Z",
            active: true,
            project_id: 200003,
            task_code_id: 3,
            task_name: "EngineeringDesign",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/95",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/95/relationships/project",
                related: "http://localhostx:3000/api/task/95/project",
              },
              data: {
                type: "project",
                id: 200003,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/95/relationships/task_codes",
                related: "http://localhostx:3000/api/task/95/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 3,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/95/relationships/task_owner",
                related: "http://localhostx:3000/api/task/95/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/95/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/95/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/95/relationships/punch_list",
                related: "http://localhostx:3000/api/task/95/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/95/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/95/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/95/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/95/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/95/relationships/bids",
                related: "http://localhostx:3000/api/task/95/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/95/relationships/files",
                related: "http://localhostx:3000/api/task/95/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 96,
          attributes: {
            created_at: "2024-05-21T17:15:40.415Z",
            updated_at: "2024-05-21T17:15:40.415Z",
            active: true,
            project_id: 200003,
            task_code_id: 4,
            task_name: "Permitting/Preliminary",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/96",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/96/relationships/project",
                related: "http://localhostx:3000/api/task/96/project",
              },
              data: {
                type: "project",
                id: 200003,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/96/relationships/task_codes",
                related: "http://localhostx:3000/api/task/96/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 4,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/96/relationships/task_owner",
                related: "http://localhostx:3000/api/task/96/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/96/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/96/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/96/relationships/punch_list",
                related: "http://localhostx:3000/api/task/96/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/96/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/96/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/96/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/96/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/96/relationships/bids",
                related: "http://localhostx:3000/api/task/96/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/96/relationships/files",
                related: "http://localhostx:3000/api/task/96/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 97,
          attributes: {
            created_at: "2024-05-21T17:15:40.415Z",
            updated_at: "2024-05-21T17:15:40.415Z",
            active: true,
            project_id: 200003,
            task_code_id: 5,
            task_name: "Clearing-SiteWork",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/97",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/97/relationships/project",
                related: "http://localhostx:3000/api/task/97/project",
              },
              data: {
                type: "project",
                id: 200003,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/97/relationships/task_codes",
                related: "http://localhostx:3000/api/task/97/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 5,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/97/relationships/task_owner",
                related: "http://localhostx:3000/api/task/97/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/97/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/97/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/97/relationships/punch_list",
                related: "http://localhostx:3000/api/task/97/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/97/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/97/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/97/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/97/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/97/relationships/bids",
                related: "http://localhostx:3000/api/task/97/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/97/relationships/files",
                related: "http://localhostx:3000/api/task/97/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 98,
          attributes: {
            created_at: "2024-05-21T17:15:40.415Z",
            updated_at: "2024-05-21T17:15:40.415Z",
            active: true,
            project_id: 200003,
            task_code_id: 6,
            task_name: "Excavation",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/98",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/98/relationships/project",
                related: "http://localhostx:3000/api/task/98/project",
              },
              data: {
                type: "project",
                id: 200003,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/98/relationships/task_codes",
                related: "http://localhostx:3000/api/task/98/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 6,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/98/relationships/task_owner",
                related: "http://localhostx:3000/api/task/98/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/98/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/98/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/98/relationships/punch_list",
                related: "http://localhostx:3000/api/task/98/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/98/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/98/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/98/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/98/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/98/relationships/bids",
                related: "http://localhostx:3000/api/task/98/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/98/relationships/files",
                related: "http://localhostx:3000/api/task/98/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 99,
          attributes: {
            created_at: "2024-05-21T17:15:40.415Z",
            updated_at: "2024-05-21T17:15:40.415Z",
            active: true,
            project_id: 200003,
            task_code_id: 7,
            task_name: "Footings",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/99",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/99/relationships/project",
                related: "http://localhostx:3000/api/task/99/project",
              },
              data: {
                type: "project",
                id: 200003,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/99/relationships/task_codes",
                related: "http://localhostx:3000/api/task/99/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 7,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/99/relationships/task_owner",
                related: "http://localhostx:3000/api/task/99/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/99/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/99/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/99/relationships/punch_list",
                related: "http://localhostx:3000/api/task/99/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/99/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/99/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/99/relationships/progression_notes",
                related: "http://localhostx:3000/api/task/99/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/99/relationships/bids",
                related: "http://localhostx:3000/api/task/99/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/99/relationships/files",
                related: "http://localhostx:3000/api/task/99/files",
              },
              data: [],
            },
          },
        },
        {
          type: "task",
          id: 100,
          attributes: {
            created_at: "2024-05-21T17:15:40.415Z",
            updated_at: "2024-05-21T17:15:40.415Z",
            active: true,
            project_id: 200003,
            task_code_id: 8,
            task_name: "UndergroundPlumbing",
            description: "",
            start_date: null,
            end_date: null,
            task_owner_id: null,
            business_id: null,
            status: null,
            notes: [],
            budget_estimated: null,
            actual_spent: null,
            percentage_complete: null,
            files_urls: [],
          },
          links: {
            self: "http://localhostx:3000/api/task/100",
          },
          relationships: {
            project: {
              links: {
                self: "http://localhostx:3000/api/task/100/relationships/project",
                related: "http://localhostx:3000/api/task/100/project",
              },
              data: {
                type: "project",
                id: 200003,
              },
            },
            task_codes: {
              links: {
                self: "http://localhostx:3000/api/task/100/relationships/task_codes",
                related: "http://localhostx:3000/api/task/100/task_codes",
              },
              data: {
                type: "task_Codes",
                id: 8,
              },
            },
            task_owner: {
              links: {
                self: "http://localhostx:3000/api/task/100/relationships/task_owner",
                related: "http://localhostx:3000/api/task/100/task_owner",
              },
              data: null,
            },
            sub_tasks: {
              links: {
                self: "http://localhostx:3000/api/task/100/relationships/sub_tasks",
                related: "http://localhostx:3000/api/task/100/sub_tasks",
              },
              data: [],
            },
            punch_list: {
              links: {
                self: "http://localhostx:3000/api/task/100/relationships/punch_list",
                related: "http://localhostx:3000/api/task/100/punch_list",
              },
              data: [],
            },
            daily_logs: {
              links: {
                self: "http://localhostx:3000/api/task/100/relationships/daily_logs",
                related: "http://localhostx:3000/api/task/100/daily_logs",
              },
              data: [],
            },
            progression_notes: {
              links: {
                self: "http://localhostx:3000/api/task/100/relationships/progression_notes",
                related:
                  "http://localhostx:3000/api/task/100/progression_notes",
              },
              data: [],
            },
            bids: {
              links: {
                self: "http://localhostx:3000/api/task/100/relationships/bids",
                related: "http://localhostx:3000/api/task/100/bids",
              },
              data: [],
            },
            files: {
              links: {
                self: "http://localhostx:3000/api/task/100/relationships/files",
                related: "http://localhostx:3000/api/task/100/files",
              },
              data: [],
            },
          },
        },
      ],
      meta: {
        serialization: {
          values: {
            "data.0.attributes.created_at": ["Date"],
            "data.0.attributes.updated_at": ["Date"],
            "data.1.attributes.created_at": ["Date"],
            "data.1.attributes.updated_at": ["Date"],
            "data.2.attributes.created_at": ["Date"],
            "data.2.attributes.updated_at": ["Date"],
            "data.3.attributes.created_at": ["Date"],
            "data.3.attributes.updated_at": ["Date"],
            "data.4.attributes.created_at": ["Date"],
            "data.4.attributes.updated_at": ["Date"],
            "data.5.attributes.created_at": ["Date"],
            "data.5.attributes.updated_at": ["Date"],
            "data.6.attributes.created_at": ["Date"],
            "data.6.attributes.updated_at": ["Date"],
            "data.7.attributes.created_at": ["Date"],
            "data.7.attributes.updated_at": ["Date"],
            "data.8.attributes.created_at": ["Date"],
            "data.8.attributes.updated_at": ["Date"],
            "data.9.attributes.created_at": ["Date"],
            "data.9.attributes.updated_at": ["Date"],
            "data.10.attributes.created_at": ["Date"],
            "data.10.attributes.updated_at": ["Date"],
            "data.11.attributes.created_at": ["Date"],
            "data.11.attributes.updated_at": ["Date"],
            "data.12.attributes.created_at": ["Date"],
            "data.12.attributes.updated_at": ["Date"],
            "data.13.attributes.created_at": ["Date"],
            "data.13.attributes.updated_at": ["Date"],
            "data.14.attributes.created_at": ["Date"],
            "data.14.attributes.updated_at": ["Date"],
            "data.15.attributes.created_at": ["Date"],
            "data.15.attributes.updated_at": ["Date"],
            "data.16.attributes.created_at": ["Date"],
            "data.16.attributes.updated_at": ["Date"],
            "data.17.attributes.created_at": ["Date"],
            "data.17.attributes.updated_at": ["Date"],
            "data.18.attributes.created_at": ["Date"],
            "data.18.attributes.updated_at": ["Date"],
            "data.19.attributes.created_at": ["Date"],
            "data.19.attributes.updated_at": ["Date"],
            "data.20.attributes.created_at": ["Date"],
            "data.20.attributes.updated_at": ["Date"],
            "data.21.attributes.created_at": ["Date"],
            "data.21.attributes.updated_at": ["Date"],
            "data.22.attributes.created_at": ["Date"],
            "data.22.attributes.updated_at": ["Date"],
            "data.23.attributes.created_at": ["Date"],
            "data.23.attributes.updated_at": ["Date"],
            "data.24.attributes.created_at": ["Date"],
            "data.24.attributes.updated_at": ["Date"],
            "data.25.attributes.created_at": ["Date"],
            "data.25.attributes.updated_at": ["Date"],
            "data.26.attributes.created_at": ["Date"],
            "data.26.attributes.updated_at": ["Date"],
            "data.27.attributes.created_at": ["Date"],
            "data.27.attributes.updated_at": ["Date"],
            "data.28.attributes.created_at": ["Date"],
            "data.28.attributes.updated_at": ["Date"],
            "data.29.attributes.created_at": ["Date"],
            "data.29.attributes.updated_at": ["Date"],
            "data.30.attributes.created_at": ["Date"],
            "data.30.attributes.updated_at": ["Date"],
            "data.31.attributes.created_at": ["Date"],
            "data.31.attributes.updated_at": ["Date"],
            "data.32.attributes.created_at": ["Date"],
            "data.32.attributes.updated_at": ["Date"],
            "data.33.attributes.created_at": ["Date"],
            "data.33.attributes.updated_at": ["Date"],
            "data.34.attributes.created_at": ["Date"],
            "data.34.attributes.updated_at": ["Date"],
            "data.35.attributes.created_at": ["Date"],
            "data.35.attributes.updated_at": ["Date"],
            "data.36.attributes.created_at": ["Date"],
            "data.36.attributes.updated_at": ["Date"],
            "data.37.attributes.created_at": ["Date"],
            "data.37.attributes.updated_at": ["Date"],
            "data.38.attributes.created_at": ["Date"],
            "data.38.attributes.updated_at": ["Date"],
            "data.39.attributes.created_at": ["Date"],
            "data.39.attributes.updated_at": ["Date"],
            "data.40.attributes.created_at": ["Date"],
            "data.40.attributes.updated_at": ["Date"],
            "data.41.attributes.created_at": ["Date"],
            "data.41.attributes.updated_at": ["Date"],
            "data.42.attributes.created_at": ["Date"],
            "data.42.attributes.updated_at": ["Date"],
            "data.43.attributes.created_at": ["Date"],
            "data.43.attributes.updated_at": ["Date"],
            "data.44.attributes.created_at": ["Date"],
            "data.44.attributes.updated_at": ["Date"],
            "data.45.attributes.created_at": ["Date"],
            "data.45.attributes.updated_at": ["Date"],
            "data.46.attributes.created_at": ["Date"],
            "data.46.attributes.updated_at": ["Date"],
            "data.47.attributes.created_at": ["Date"],
            "data.47.attributes.updated_at": ["Date"],
            "data.48.attributes.created_at": ["Date"],
            "data.48.attributes.updated_at": ["Date"],
            "data.49.attributes.created_at": ["Date"],
            "data.49.attributes.updated_at": ["Date"],
            "data.50.attributes.created_at": ["Date"],
            "data.50.attributes.updated_at": ["Date"],
            "data.51.attributes.created_at": ["Date"],
            "data.51.attributes.updated_at": ["Date"],
            "data.52.attributes.created_at": ["Date"],
            "data.52.attributes.updated_at": ["Date"],
            "data.53.attributes.created_at": ["Date"],
            "data.53.attributes.updated_at": ["Date"],
            "data.54.attributes.created_at": ["Date"],
            "data.54.attributes.updated_at": ["Date"],
            "data.55.attributes.created_at": ["Date"],
            "data.55.attributes.updated_at": ["Date"],
            "data.56.attributes.created_at": ["Date"],
            "data.56.attributes.updated_at": ["Date"],
            "data.57.attributes.created_at": ["Date"],
            "data.57.attributes.updated_at": ["Date"],
            "data.58.attributes.created_at": ["Date"],
            "data.58.attributes.updated_at": ["Date"],
            "data.59.attributes.created_at": ["Date"],
            "data.59.attributes.updated_at": ["Date"],
            "data.60.attributes.created_at": ["Date"],
            "data.60.attributes.updated_at": ["Date"],
            "data.61.attributes.created_at": ["Date"],
            "data.61.attributes.updated_at": ["Date"],
            "data.62.attributes.created_at": ["Date"],
            "data.62.attributes.updated_at": ["Date"],
            "data.63.attributes.created_at": ["Date"],
            "data.63.attributes.updated_at": ["Date"],
            "data.64.attributes.created_at": ["Date"],
            "data.64.attributes.updated_at": ["Date"],
            "data.65.attributes.created_at": ["Date"],
            "data.65.attributes.updated_at": ["Date"],
            "data.66.attributes.created_at": ["Date"],
            "data.66.attributes.updated_at": ["Date"],
            "data.67.attributes.created_at": ["Date"],
            "data.67.attributes.updated_at": ["Date"],
            "data.68.attributes.created_at": ["Date"],
            "data.68.attributes.updated_at": ["Date"],
            "data.69.attributes.created_at": ["Date"],
            "data.69.attributes.updated_at": ["Date"],
            "data.70.attributes.created_at": ["Date"],
            "data.70.attributes.updated_at": ["Date"],
            "data.71.attributes.created_at": ["Date"],
            "data.71.attributes.updated_at": ["Date"],
            "data.72.attributes.created_at": ["Date"],
            "data.72.attributes.updated_at": ["Date"],
            "data.73.attributes.created_at": ["Date"],
            "data.73.attributes.updated_at": ["Date"],
            "data.74.attributes.created_at": ["Date"],
            "data.74.attributes.updated_at": ["Date"],
            "data.75.attributes.created_at": ["Date"],
            "data.75.attributes.updated_at": ["Date"],
            "data.76.attributes.created_at": ["Date"],
            "data.76.attributes.updated_at": ["Date"],
            "data.77.attributes.created_at": ["Date"],
            "data.77.attributes.updated_at": ["Date"],
            "data.78.attributes.created_at": ["Date"],
            "data.78.attributes.updated_at": ["Date"],
            "data.79.attributes.created_at": ["Date"],
            "data.79.attributes.updated_at": ["Date"],
            "data.80.attributes.created_at": ["Date"],
            "data.80.attributes.updated_at": ["Date"],
            "data.81.attributes.created_at": ["Date"],
            "data.81.attributes.updated_at": ["Date"],
            "data.82.attributes.created_at": ["Date"],
            "data.82.attributes.updated_at": ["Date"],
            "data.83.attributes.created_at": ["Date"],
            "data.83.attributes.updated_at": ["Date"],
            "data.84.attributes.created_at": ["Date"],
            "data.84.attributes.updated_at": ["Date"],
            "data.85.attributes.created_at": ["Date"],
            "data.85.attributes.updated_at": ["Date"],
            "data.86.attributes.created_at": ["Date"],
            "data.86.attributes.updated_at": ["Date"],
            "data.87.attributes.created_at": ["Date"],
            "data.87.attributes.updated_at": ["Date"],
            "data.88.attributes.created_at": ["Date"],
            "data.88.attributes.updated_at": ["Date"],
            "data.89.attributes.created_at": ["Date"],
            "data.89.attributes.updated_at": ["Date"],
            "data.90.attributes.created_at": ["Date"],
            "data.90.attributes.updated_at": ["Date"],
            "data.91.attributes.created_at": ["Date"],
            "data.91.attributes.updated_at": ["Date"],
            "data.92.attributes.created_at": ["Date"],
            "data.92.attributes.updated_at": ["Date"],
            "data.93.attributes.created_at": ["Date"],
            "data.93.attributes.updated_at": ["Date"],
            "data.94.attributes.created_at": ["Date"],
            "data.94.attributes.updated_at": ["Date"],
            "data.95.attributes.created_at": ["Date"],
            "data.95.attributes.updated_at": ["Date"],
            "data.96.attributes.created_at": ["Date"],
            "data.96.attributes.updated_at": ["Date"],
            "data.97.attributes.created_at": ["Date"],
            "data.97.attributes.updated_at": ["Date"],
            "data.98.attributes.created_at": ["Date"],
            "data.98.attributes.updated_at": ["Date"],
            "data.99.attributes.created_at": ["Date"],
            "data.99.attributes.updated_at": ["Date"],
          },
        },
        total: 552,
      },
    });
}
