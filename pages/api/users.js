export default function handler(req, res) {
  res.status(200).json({
    "jsonapi": {
        "version": "1.1"
    },
    "links": {
        "self": "http://localhostx:3000/api/user",
        "first": "http://localhostx:3000/api/user?page%5Blimit%5D=100",
        "last": "http://localhostx:3000/api/user?page%5Boffset%5D=100",
        "prev": null,
        "next": "http://localhostx:3000/api/user?page%5Boffset%5D=100&page%5Blimit%5D=100"
    },
    "data": [
        {
            "type": "user",
            "id": 100001,
            "attributes": {
                "created_at": "2024-05-21T17:15:00.945Z",
                "updated_at": "2024-05-21T17:15:00.945Z",
                "active": true,
                "username": "Jordan.Spieth",
                "email": "Jordan.Spieth@mail.com",
                "first_name": "Jordan",
                "middle_name": "HO",
                "last_name": "Spieth",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "homeowner"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100001"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100001/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100001/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100001/home_owner_projects"
                    },
                    "data": [
                        {
                            "type": "project",
                            "id": 200001
                        }
                    ]
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100001/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103000
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100001/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100001/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100001/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100001/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100001/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100001/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100001/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100001/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100001/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100001/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100001/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100001/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100001/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100001/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100001/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100001/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100002,
            "attributes": {
                "created_at": "2024-05-21T17:15:01.175Z",
                "updated_at": "2024-05-21T17:15:01.175Z",
                "active": true,
                "username": "Rickie.Fowler",
                "email": "Rickie.Fowler@mail.com",
                "first_name": "Rickie",
                "middle_name": "HO",
                "last_name": "Fowler",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "homeowner"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100002"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100002/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100002/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100002/home_owner_projects"
                    },
                    "data": [
                        {
                            "type": "project",
                            "id": 200002
                        }
                    ]
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100002/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103001
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100002/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100002/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100002/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100002/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100002/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100002/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100002/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100002/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100002/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100002/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100002/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100002/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100002/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100002/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100002/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100002/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100003,
            "attributes": {
                "created_at": "2024-05-21T17:15:01.396Z",
                "updated_at": "2024-05-21T17:15:01.396Z",
                "active": true,
                "username": "Bryson.Dechambeu",
                "email": "Bryson.Dechambeu@mail.com",
                "first_name": "Bryson",
                "middle_name": "HO",
                "last_name": "Dechambeu",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "homeowner"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100003"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100003/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100003/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100003/home_owner_projects"
                    },
                    "data": [
                        {
                            "type": "project",
                            "id": 200003
                        }
                    ]
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100003/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103002
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100003/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100003/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100003/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100003/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100003/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100003/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100003/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100003/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100003/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100003/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100003/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100003/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100003/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100003/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100003/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100003/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100004,
            "attributes": {
                "created_at": "2024-05-21T17:15:01.611Z",
                "updated_at": "2024-05-21T17:15:01.611Z",
                "active": true,
                "username": "Jon.Rham",
                "email": "Jon.Rham@mail.com",
                "first_name": "Jon",
                "middle_name": "HO",
                "last_name": "Rham",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "homeowner"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100004"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100004/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100004/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100004/home_owner_projects"
                    },
                    "data": [
                        {
                            "type": "project",
                            "id": 200004
                        }
                    ]
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100004/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103003
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100004/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100004/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100004/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100004/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100004/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100004/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100004/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100004/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100004/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100004/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100004/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100004/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100004/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100004/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100004/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100004/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100005,
            "attributes": {
                "created_at": "2024-05-21T17:15:01.808Z",
                "updated_at": "2024-05-21T17:15:01.808Z",
                "active": true,
                "username": "Sahith.Theegala",
                "email": "Sahith.Theegala@mail.com",
                "first_name": "Sahith",
                "middle_name": "HO",
                "last_name": "Theegala",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "homeowner"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100005"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100005/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100005/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100005/home_owner_projects"
                    },
                    "data": [
                        {
                            "type": "project",
                            "id": 200005
                        }
                    ]
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100005/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103004
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100005/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100005/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100005/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100005/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100005/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100005/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100005/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100005/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100005/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100005/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100005/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100005/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100005/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100005/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100005/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100005/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100006,
            "attributes": {
                "created_at": "2024-05-21T17:15:02.029Z",
                "updated_at": "2024-05-21T17:15:02.029Z",
                "active": true,
                "username": "Xander.Schauffele",
                "email": "Xander.Schauffele@mail.com",
                "first_name": "Xander",
                "middle_name": "HO",
                "last_name": "Schauffele",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "homeowner"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100006"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100006/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100006/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100006/home_owner_projects"
                    },
                    "data": [
                        {
                            "type": "project",
                            "id": 200006
                        }
                    ]
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100006/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103005
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100006/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100006/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100006/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100006/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100006/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100006/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100006/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100006/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100006/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100006/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100006/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100006/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100006/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100006/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100006/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100006/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100007,
            "attributes": {
                "created_at": "2024-05-21T17:15:02.236Z",
                "updated_at": "2024-05-21T17:15:02.236Z",
                "active": true,
                "username": "Scottie.Scheffler",
                "email": "Scottie.Scheffler@mail.com",
                "first_name": "Scottie",
                "middle_name": "HO",
                "last_name": "Scheffler",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "homeowner"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100007"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100007/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100007/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100007/home_owner_projects"
                    },
                    "data": [
                        {
                            "type": "project",
                            "id": 200007
                        },
                        {
                            "type": "project",
                            "id": 200011
                        }
                    ]
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100007/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103006
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100007/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100007/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100007/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100007/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100007/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100007/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100007/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100007/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100007/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100007/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100007/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100007/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100007/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100007/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100007/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100007/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100008,
            "attributes": {
                "created_at": "2024-05-21T17:15:02.438Z",
                "updated_at": "2024-05-21T17:15:02.438Z",
                "active": true,
                "username": "Justin.Rose",
                "email": "Justin.Rose@mail.com",
                "first_name": "Justin",
                "middle_name": "HO",
                "last_name": "Rose",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "homeowner"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100008"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100008/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100008/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100008/home_owner_projects"
                    },
                    "data": [
                        {
                            "type": "project",
                            "id": 200008
                        }
                    ]
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100008/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103007
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100008/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100008/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100008/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100008/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100008/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100008/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100008/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100008/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100008/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100008/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100008/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100008/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100008/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100008/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100008/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100008/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100009,
            "attributes": {
                "created_at": "2024-05-21T17:15:02.663Z",
                "updated_at": "2024-05-21T17:15:02.663Z",
                "active": true,
                "username": "Brooks.Koepka",
                "email": "Brooks.Koepka@mail.com",
                "first_name": "Brooks",
                "middle_name": "HO",
                "last_name": "Koepka",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "homeowner"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100009"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100009/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100009/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100009/home_owner_projects"
                    },
                    "data": [
                        {
                            "type": "project",
                            "id": 200009
                        },
                        {
                            "type": "project",
                            "id": 200012
                        }
                    ]
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100009/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103008
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100009/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100009/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100009/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100009/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100009/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100009/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100009/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100009/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100009/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100009/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100009/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100009/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100009/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100009/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100009/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100009/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100010,
            "attributes": {
                "created_at": "2024-05-21T17:15:02.899Z",
                "updated_at": "2024-05-21T17:15:02.899Z",
                "active": true,
                "username": "Justin.Thomas",
                "email": "Justin.Thomas@mail.com",
                "first_name": "Justin",
                "middle_name": "HO",
                "last_name": "Thomas",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "homeowner"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100010"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100010/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101000
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100010/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100010/home_owner_projects"
                    },
                    "data": [
                        {
                            "type": "project",
                            "id": 200010
                        }
                    ]
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100010/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103009
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100010/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100010/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100010/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100010/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100010/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100010/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100010/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100010/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100010/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100010/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100010/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100010/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100010/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100010/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100010/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100010/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100011,
            "attributes": {
                "created_at": "2024-05-21T17:15:03.128Z",
                "updated_at": "2024-05-21T17:15:03.128Z",
                "active": true,
                "username": "John.Arcadia",
                "email": "John.Arcadia@mail.com",
                "first_name": "John",
                "middle_name": "FA",
                "last_name": "Arcadia",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100011"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100011/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100011/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100011/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100011/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103010
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100011/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100011/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100011/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100011/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100011/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100011/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100011/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100011/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100011/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100011/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100011/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100011/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100011/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100011/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100011/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100011/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100012,
            "attributes": {
                "created_at": "2024-05-21T17:15:03.360Z",
                "updated_at": "2024-05-21T17:15:03.360Z",
                "active": true,
                "username": "David.Arcadia",
                "email": "David.Arcadia@mail.com",
                "first_name": "David",
                "middle_name": "PM_FC",
                "last_name": "Arcadia",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100012"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100012/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100012/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100012/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100012/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103011
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100012/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100012/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100012/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100012/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100012/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100012/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100012/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100012/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100012/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100012/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100012/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100012/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100012/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100012/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100012/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100012/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100013,
            "attributes": {
                "created_at": "2024-05-21T17:15:03.576Z",
                "updated_at": "2024-05-21T17:15:03.576Z",
                "active": true,
                "username": "Tom.Arcadia",
                "email": "Tom.Arcadia@mail.com",
                "first_name": "Tom",
                "middle_name": "ES_SM",
                "last_name": "Arcadia",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100013"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100013/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100013/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100013/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100013/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103012
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100013/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100013/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100013/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100013/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100013/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100013/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100013/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100013/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100013/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100013/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100013/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100013/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100013/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100013/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100013/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100013/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100014,
            "attributes": {
                "created_at": "2024-05-21T17:15:03.783Z",
                "updated_at": "2024-05-21T17:15:03.783Z",
                "active": true,
                "username": "Peter.Arcadia",
                "email": "Peter.Arcadia@mail.com",
                "first_name": "Peter",
                "middle_name": "FA",
                "last_name": "Arcadia",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100014"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100014/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100014/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100014/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100014/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103013
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100014/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100014/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100014/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100014/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100014/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100014/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100014/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100014/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100014/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100014/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100014/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100014/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100014/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100014/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100014/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100014/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100015,
            "attributes": {
                "created_at": "2024-05-21T17:15:04.419Z",
                "updated_at": "2024-05-21T17:15:04.419Z",
                "active": true,
                "username": "Chris.Arcadia",
                "email": "Chris.Arcadia@mail.com",
                "first_name": "Chris",
                "middle_name": "OM_BK",
                "last_name": "Arcadia",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100015"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100015/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101001
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100015/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100015/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100015/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103014
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100015/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100015/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100015/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100015/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100015/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100015/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100015/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100015/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100015/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100015/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100015/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100015/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100015/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100015/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100015/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100015/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100016,
            "attributes": {
                "created_at": "2024-05-21T17:15:04.786Z",
                "updated_at": "2024-05-21T17:15:04.786Z",
                "active": true,
                "username": "Patrick.ARCustom",
                "email": "Patrick.ARCustom@mail.com",
                "first_name": "Patrick",
                "middle_name": "FA",
                "last_name": "ARCustom",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100016"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100016/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100016/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100016/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100016/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103015
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100016/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100016/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100016/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100016/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100016/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100016/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100016/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100016/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100016/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100016/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100016/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100016/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100016/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100016/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100016/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100016/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100017,
            "attributes": {
                "created_at": "2024-05-21T17:15:04.992Z",
                "updated_at": "2024-05-21T17:15:04.992Z",
                "active": true,
                "username": "Alex.ARCustom",
                "email": "Alex.ARCustom@mail.com",
                "first_name": "Alex",
                "middle_name": "ES_SM",
                "last_name": "ARCustom",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100017"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100017/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100017/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100017/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100017/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103016
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100017/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100017/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100017/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100017/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100017/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100017/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100017/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100017/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100017/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100017/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100017/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100017/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100017/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100017/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100017/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100017/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100018,
            "attributes": {
                "created_at": "2024-05-21T17:15:05.211Z",
                "updated_at": "2024-05-21T17:15:05.211Z",
                "active": true,
                "username": "Les.ARCustom",
                "email": "Les.ARCustom@mail.com",
                "first_name": "Les",
                "middle_name": "OM_BK",
                "last_name": "ARCustom",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100018"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100018/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101002
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100018/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100018/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100018/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103017
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100018/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100018/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100018/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100018/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100018/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100018/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100018/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100018/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100018/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100018/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100018/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100018/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100018/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100018/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100018/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100018/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100019,
            "attributes": {
                "created_at": "2024-05-21T17:15:05.426Z",
                "updated_at": "2024-05-21T17:15:05.426Z",
                "active": true,
                "username": "John.Grandfather",
                "email": "John.Grandfather@mail.com",
                "first_name": "John",
                "middle_name": "FA",
                "last_name": "Grandfather",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100019"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100019/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100019/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100019/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100019/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103018
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100019/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100019/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100019/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100019/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100019/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100019/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100019/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100019/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100019/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100019/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100019/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100019/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100019/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100019/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100019/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100019/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100020,
            "attributes": {
                "created_at": "2024-05-21T17:15:05.672Z",
                "updated_at": "2024-05-21T17:15:05.672Z",
                "active": true,
                "username": "David.Grandfather",
                "email": "David.Grandfather@mail.com",
                "first_name": "David",
                "middle_name": "PM",
                "last_name": "Grandfather",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100020"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100020/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100020/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100020/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100020/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103019
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100020/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100020/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100020/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100020/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100020/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100020/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100020/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100020/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100020/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100020/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100020/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100020/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100020/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100020/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100020/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100020/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100021,
            "attributes": {
                "created_at": "2024-05-21T17:15:05.896Z",
                "updated_at": "2024-05-21T17:15:05.896Z",
                "active": true,
                "username": "Tom.Grandfather",
                "email": "Tom.Grandfather@mail.com",
                "first_name": "Tom",
                "middle_name": "OM",
                "last_name": "Grandfather",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100021"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100021/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100021/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100021/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100021/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103020
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100021/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100021/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100021/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100021/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100021/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100021/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100021/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100021/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100021/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100021/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100021/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100021/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100021/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100021/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100021/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100021/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100022,
            "attributes": {
                "created_at": "2024-05-21T17:15:06.116Z",
                "updated_at": "2024-05-21T17:15:06.116Z",
                "active": true,
                "username": "Peter.Grandfather",
                "email": "Peter.Grandfather@mail.com",
                "first_name": "Peter",
                "middle_name": "BK",
                "last_name": "Grandfather",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100022"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100022/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100022/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100022/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100022/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103021
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100022/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100022/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100022/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100022/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100022/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100022/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100022/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100022/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100022/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100022/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100022/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100022/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100022/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100022/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100022/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100022/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100023,
            "attributes": {
                "created_at": "2024-05-21T17:15:06.329Z",
                "updated_at": "2024-05-21T17:15:06.329Z",
                "active": true,
                "username": "Chris.Grandfather",
                "email": "Chris.Grandfather@mail.com",
                "first_name": "Chris",
                "middle_name": "ES",
                "last_name": "Grandfather",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100023"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100023/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100023/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100023/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100023/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103022
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100023/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100023/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100023/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100023/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100023/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100023/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100023/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100023/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100023/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100023/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100023/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100023/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100023/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100023/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100023/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100023/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100024,
            "attributes": {
                "created_at": "2024-05-21T17:15:06.611Z",
                "updated_at": "2024-05-21T17:15:06.611Z",
                "active": true,
                "username": "Patrick.Grandfather",
                "email": "Patrick.Grandfather@mail.com",
                "first_name": "Patrick",
                "middle_name": "FC_PM",
                "last_name": "Grandfather",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100024"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100024/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101003
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100024/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100024/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100024/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103023
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100024/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100024/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100024/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100024/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100024/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100024/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100024/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100024/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100024/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100024/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100024/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100024/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100024/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100024/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100024/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100024/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100025,
            "attributes": {
                "created_at": "2024-05-21T17:15:06.817Z",
                "updated_at": "2024-05-21T17:15:06.817Z",
                "active": true,
                "username": "Alex.Knight",
                "email": "Alex.Knight@mail.com",
                "first_name": "Alex",
                "middle_name": "FA",
                "last_name": "Knight",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100025"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100025/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100025/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100025/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100025/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103024
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100025/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100025/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100025/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100025/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100025/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100025/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100025/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100025/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100025/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100025/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100025/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100025/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100025/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100025/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100025/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100025/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100026,
            "attributes": {
                "created_at": "2024-05-21T17:15:07.023Z",
                "updated_at": "2024-05-21T17:15:07.023Z",
                "active": true,
                "username": "Les.Knight",
                "email": "Les.Knight@mail.com",
                "first_name": "Les",
                "middle_name": "PM",
                "last_name": "Knight",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100026"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100026/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100026/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100026/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100026/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103025
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100026/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100026/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100026/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100026/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100026/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100026/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100026/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100026/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100026/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100026/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100026/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100026/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100026/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100026/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100026/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100026/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100027,
            "attributes": {
                "created_at": "2024-05-21T17:15:07.257Z",
                "updated_at": "2024-05-21T17:15:07.257Z",
                "active": true,
                "username": "John.Knight",
                "email": "John.Knight@mail.com",
                "first_name": "John",
                "middle_name": "OM",
                "last_name": "Knight",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100027"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100027/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100027/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100027/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100027/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103026
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100027/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100027/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100027/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100027/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100027/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100027/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100027/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100027/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100027/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100027/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100027/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100027/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100027/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100027/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100027/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100027/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100028,
            "attributes": {
                "created_at": "2024-05-21T17:15:07.495Z",
                "updated_at": "2024-05-21T17:15:07.495Z",
                "active": true,
                "username": "David.Knight",
                "email": "David.Knight@mail.com",
                "first_name": "David",
                "middle_name": "BK",
                "last_name": "Knight",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100028"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100028/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100028/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100028/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100028/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103027
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100028/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100028/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100028/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100028/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100028/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100028/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100028/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100028/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100028/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100028/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100028/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100028/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100028/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100028/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100028/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100028/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100029,
            "attributes": {
                "created_at": "2024-05-21T17:15:07.720Z",
                "updated_at": "2024-05-21T17:15:07.720Z",
                "active": true,
                "username": "Tom.Knight",
                "email": "Tom.Knight@mail.com",
                "first_name": "Tom",
                "middle_name": "ES",
                "last_name": "Knight",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100029"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100029/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100029/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100029/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100029/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103028
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100029/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100029/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100029/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100029/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100029/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100029/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100029/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100029/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100029/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100029/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100029/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100029/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100029/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100029/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100029/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100029/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100030,
            "attributes": {
                "created_at": "2024-05-21T17:15:07.936Z",
                "updated_at": "2024-05-21T17:15:07.936Z",
                "active": true,
                "username": "Peter.Knight",
                "email": "Peter.Knight@mail.com",
                "first_name": "Peter",
                "middle_name": "FC",
                "last_name": "Knight",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100030"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100030/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100030/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100030/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100030/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103029
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100030/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100030/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100030/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100030/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100030/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100030/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100030/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100030/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100030/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100030/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100030/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100030/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100030/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100030/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100030/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100030/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100031,
            "attributes": {
                "created_at": "2024-05-21T17:15:08.317Z",
                "updated_at": "2024-05-21T17:15:08.317Z",
                "active": true,
                "username": "Chris.Knight",
                "email": "Chris.Knight@mail.com",
                "first_name": "Chris",
                "middle_name": "SM",
                "last_name": "Knight",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100031"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100031/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101004
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100031/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100031/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100031/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103030
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100031/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100031/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100031/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100031/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100031/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100031/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100031/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100031/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100031/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100031/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100031/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100031/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100031/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100031/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100031/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100031/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100032,
            "attributes": {
                "created_at": "2024-05-21T17:15:08.732Z",
                "updated_at": "2024-05-21T17:15:08.732Z",
                "active": true,
                "username": "Patrick.BuildingGraphics",
                "email": "Patrick.BuildingGraphics@mail.com",
                "first_name": "Patrick",
                "middle_name": "FA",
                "last_name": "BuildingGraphics",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100032"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100032/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100032/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100032/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100032/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103031
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100032/project_assignments"
                    },
                    "data": [
                        {
                            "type": "project_Assignments",
                            "id": 300001
                        },
                        {
                            "type": "project_Assignments",
                            "id": 300003
                        }
                    ]
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100032/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100032/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100032/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100032/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100032/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100032/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100032/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100032/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100032/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100032/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100032/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100032/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100032/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100032/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100032/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100033,
            "attributes": {
                "created_at": "2024-05-21T17:15:08.935Z",
                "updated_at": "2024-05-21T17:15:08.935Z",
                "active": true,
                "username": "Alex.BuildingGraphics",
                "email": "Alex.BuildingGraphics@mail.com",
                "first_name": "Alex",
                "middle_name": "FA",
                "last_name": "BuildingGraphics",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100033"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100033/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101005
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100033/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100033/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100033/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103032
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100033/project_assignments"
                    },
                    "data": [
                        {
                            "type": "project_Assignments",
                            "id": 300002
                        }
                    ]
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100033/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100033/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100033/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100033/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100033/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100033/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100033/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100033/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100033/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100033/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100033/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100033/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100033/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100033/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100033/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100034,
            "attributes": {
                "created_at": "2024-05-21T17:15:09.136Z",
                "updated_at": "2024-05-21T17:15:09.136Z",
                "active": true,
                "username": "Les.KDDesigns",
                "email": "Les.KDDesigns@mail.com",
                "first_name": "Les",
                "middle_name": "FA",
                "last_name": "KDDesigns",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100034"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100034/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101006
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100034/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100034/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100034/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103033
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100034/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100034/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100034/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100034/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100034/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100034/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100034/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100034/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100034/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100034/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100034/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100034/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100034/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100034/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100034/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100034/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100035,
            "attributes": {
                "created_at": "2024-05-21T17:15:09.352Z",
                "updated_at": "2024-05-21T17:15:09.352Z",
                "active": true,
                "username": "John.Gregs",
                "email": "John.Gregs@mail.com",
                "first_name": "John",
                "middle_name": "FA",
                "last_name": "Gregs",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100035"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100035/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101007
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100035/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100035/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100035/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103034
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100035/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100035/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100035/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100035/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100035/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100035/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100035/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100035/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100035/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100035/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100035/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100035/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100035/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100035/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100035/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100035/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100036,
            "attributes": {
                "created_at": "2024-05-21T17:15:09.567Z",
                "updated_at": "2024-05-21T17:15:09.567Z",
                "active": true,
                "username": "David.Cantley",
                "email": "David.Cantley@mail.com",
                "first_name": "David",
                "middle_name": "FA",
                "last_name": "Cantley",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100036"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100036/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100036/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100036/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100036/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103035
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100036/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100036/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100036/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100036/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100036/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100036/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100036/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100036/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100036/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100036/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100036/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100036/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100036/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100036/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100036/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100036/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100037,
            "attributes": {
                "created_at": "2024-05-21T17:15:09.791Z",
                "updated_at": "2024-05-21T17:15:09.791Z",
                "active": true,
                "username": "Tom.Cantley",
                "email": "Tom.Cantley@mail.com",
                "first_name": "Tom",
                "middle_name": "PM_ES",
                "last_name": "Cantley",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100037"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100037/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100037/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100037/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100037/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103036
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100037/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100037/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100037/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100037/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100037/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100037/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100037/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100037/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100037/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100037/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100037/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100037/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100037/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100037/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100037/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100037/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100038,
            "attributes": {
                "created_at": "2024-05-21T17:15:10.018Z",
                "updated_at": "2024-05-21T17:15:10.018Z",
                "active": true,
                "username": "Peter.Doggett",
                "email": "Peter.Doggett@mail.com",
                "first_name": "Peter",
                "middle_name": "FA_PM_ES",
                "last_name": "Doggett",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100038"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100038/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101008
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100038/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100038/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100038/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103037
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100038/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100038/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100038/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100038/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100038/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100038/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100038/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100038/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100038/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100038/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100038/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100038/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100038/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100038/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100038/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100038/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100039,
            "attributes": {
                "created_at": "2024-05-21T17:15:10.406Z",
                "updated_at": "2024-05-21T17:15:10.406Z",
                "active": true,
                "username": "Chris.Doggett",
                "email": "Chris.Doggett@mail.com",
                "first_name": "Chris",
                "middle_name": "FA",
                "last_name": "Doggett",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100039"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100039/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100039/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100039/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100039/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103038
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100039/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100039/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100039/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100039/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100039/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100039/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100039/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100039/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100039/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100039/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100039/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100039/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100039/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100039/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100039/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100039/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100040,
            "attributes": {
                "created_at": "2024-05-21T17:15:10.639Z",
                "updated_at": "2024-05-21T17:15:10.639Z",
                "active": true,
                "username": "Patrick.Doggett",
                "email": "Patrick.Doggett@mail.com",
                "first_name": "Patrick",
                "middle_name": "OM_BK",
                "last_name": "Doggett",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100040"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100040/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101009
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100040/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100040/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100040/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103039
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100040/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100040/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100040/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100040/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100040/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100040/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100040/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100040/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100040/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100040/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100040/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100040/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100040/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100040/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100040/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100040/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100041,
            "attributes": {
                "created_at": "2024-05-21T17:15:10.859Z",
                "updated_at": "2024-05-21T17:15:10.859Z",
                "active": true,
                "username": "Alex.Masterpiece",
                "email": "Alex.Masterpiece@mail.com",
                "first_name": "Alex",
                "middle_name": "FA",
                "last_name": "Masterpiece",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100041"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100041/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100041/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100041/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100041/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103040
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100041/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100041/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100041/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100041/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100041/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100041/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100041/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100041/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100041/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100041/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100041/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100041/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100041/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100041/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100041/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100041/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100042,
            "attributes": {
                "created_at": "2024-05-21T17:15:11.177Z",
                "updated_at": "2024-05-21T17:15:11.177Z",
                "active": true,
                "username": "Les.Masterpiece",
                "email": "Les.Masterpiece@mail.com",
                "first_name": "Les",
                "middle_name": "FA",
                "last_name": "Masterpiece",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100042"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100042/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101010
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100042/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100042/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100042/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103041
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100042/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100042/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100042/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100042/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100042/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100042/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100042/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100042/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100042/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100042/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100042/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100042/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100042/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100042/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100042/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100042/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100043,
            "attributes": {
                "created_at": "2024-05-21T17:15:11.399Z",
                "updated_at": "2024-05-21T17:15:11.399Z",
                "active": true,
                "username": "John.Framing1",
                "email": "John.Framing1@mail.com",
                "first_name": "John",
                "middle_name": "FA",
                "last_name": "Framing1",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100043"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100043/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101011
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100043/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100043/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100043/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103042
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100043/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100043/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100043/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100043/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100043/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100043/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100043/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100043/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100043/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100043/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100043/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100043/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100043/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100043/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100043/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100043/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100044,
            "attributes": {
                "created_at": "2024-05-21T17:15:11.596Z",
                "updated_at": "2024-05-21T17:15:11.596Z",
                "active": true,
                "username": "David.Framing2",
                "email": "David.Framing2@mail.com",
                "first_name": "David",
                "middle_name": "FA",
                "last_name": "Framing2",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100044"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100044/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100044/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100044/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100044/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103043
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100044/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100044/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100044/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100044/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100044/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100044/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100044/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100044/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100044/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100044/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100044/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100044/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100044/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100044/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100044/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100044/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100045,
            "attributes": {
                "created_at": "2024-05-21T17:15:11.804Z",
                "updated_at": "2024-05-21T17:15:11.804Z",
                "active": true,
                "username": "Tom.Framing2",
                "email": "Tom.Framing2@mail.com",
                "first_name": "Tom",
                "middle_name": "PM",
                "last_name": "Framing2",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100045"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100045/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101012
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100045/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100045/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100045/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103044
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100045/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100045/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100045/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100045/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100045/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100045/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100045/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100045/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100045/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100045/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100045/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100045/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100045/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100045/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100045/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100045/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100046,
            "attributes": {
                "created_at": "2024-05-21T17:15:12.099Z",
                "updated_at": "2024-05-21T17:15:12.099Z",
                "active": true,
                "username": "Peter.Bates",
                "email": "Peter.Bates@mail.com",
                "first_name": "Peter",
                "middle_name": "FA",
                "last_name": "Bates",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100046"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100046/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100046/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100046/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100046/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103045
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100046/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100046/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100046/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100046/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100046/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100046/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100046/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100046/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100046/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100046/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100046/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100046/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100046/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100046/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100046/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100046/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100047,
            "attributes": {
                "created_at": "2024-05-21T17:15:12.317Z",
                "updated_at": "2024-05-21T17:15:12.317Z",
                "active": true,
                "username": "Chris.Bates",
                "email": "Chris.Bates@mail.com",
                "first_name": "Chris",
                "middle_name": "PM_FC",
                "last_name": "Bates",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100047"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100047/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100047/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100047/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100047/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103046
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100047/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100047/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100047/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100047/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100047/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100047/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100047/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100047/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100047/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100047/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100047/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100047/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100047/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100047/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100047/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100047/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100048,
            "attributes": {
                "created_at": "2024-05-21T17:15:12.559Z",
                "updated_at": "2024-05-21T17:15:12.559Z",
                "active": true,
                "username": "Patrick.Bates",
                "email": "Patrick.Bates@mail.com",
                "first_name": "Patrick",
                "middle_name": "PM",
                "last_name": "Bates",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100048"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100048/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101013
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100048/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100048/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100048/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103047
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100048/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100048/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100048/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100048/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100048/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100048/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100048/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100048/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100048/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100048/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100048/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100048/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100048/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100048/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100048/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100048/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100049,
            "attributes": {
                "created_at": "2024-05-21T17:15:12.775Z",
                "updated_at": "2024-05-21T17:15:12.775Z",
                "active": true,
                "username": "Alex.Summit",
                "email": "Alex.Summit@mail.com",
                "first_name": "Alex",
                "middle_name": "FA",
                "last_name": "Summit",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100049"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100049/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100049/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100049/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100049/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103048
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100049/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100049/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100049/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100049/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100049/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100049/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100049/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100049/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100049/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100049/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100049/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100049/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100049/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100049/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100049/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100049/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100050,
            "attributes": {
                "created_at": "2024-05-21T17:15:12.991Z",
                "updated_at": "2024-05-21T17:15:12.991Z",
                "active": true,
                "username": "Les.Summit",
                "email": "Les.Summit@mail.com",
                "first_name": "Les",
                "middle_name": "PM_FC",
                "last_name": "Summit",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100050"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100050/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100050/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100050/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100050/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103049
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100050/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100050/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100050/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100050/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100050/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100050/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100050/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100050/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100050/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100050/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100050/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100050/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100050/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100050/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100050/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100050/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100051,
            "attributes": {
                "created_at": "2024-05-21T17:15:13.224Z",
                "updated_at": "2024-05-21T17:15:13.224Z",
                "active": true,
                "username": "John.Summit",
                "email": "John.Summit@mail.com",
                "first_name": "John",
                "middle_name": "BK_OS",
                "last_name": "Summit",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100051"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100051/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100051/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100051/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100051/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103050
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100051/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100051/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100051/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100051/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100051/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100051/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100051/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100051/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100051/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100051/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100051/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100051/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100051/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100051/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100051/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100051/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100052,
            "attributes": {
                "created_at": "2024-05-21T17:15:13.587Z",
                "updated_at": "2024-05-21T17:15:13.587Z",
                "active": true,
                "username": "David.Summit",
                "email": "David.Summit@mail.com",
                "first_name": "David",
                "middle_name": "SM",
                "last_name": "Summit",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100052"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100052/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100052/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100052/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100052/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103051
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100052/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100052/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100052/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100052/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100052/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100052/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100052/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100052/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100052/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100052/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100052/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100052/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100052/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100052/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100052/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100052/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100053,
            "attributes": {
                "created_at": "2024-05-21T17:15:13.788Z",
                "updated_at": "2024-05-21T17:15:13.788Z",
                "active": true,
                "username": "Tom.Summit",
                "email": "Tom.Summit@mail.com",
                "first_name": "Tom",
                "middle_name": "PM_FC",
                "last_name": "Summit",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100053"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100053/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101014
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100053/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100053/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100053/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103052
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100053/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100053/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100053/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100053/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100053/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100053/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100053/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100053/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100053/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100053/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100053/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100053/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100053/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100053/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100053/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100053/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100054,
            "attributes": {
                "created_at": "2024-05-21T17:15:13.986Z",
                "updated_at": "2024-05-21T17:15:13.986Z",
                "active": true,
                "username": "Peter.Electrician",
                "email": "Peter.Electrician@mail.com",
                "first_name": "Peter",
                "middle_name": "FA",
                "last_name": "Electrician",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100054"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100054/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101015
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100054/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100054/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100054/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103053
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100054/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100054/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100054/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100054/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100054/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100054/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100054/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100054/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100054/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100054/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100054/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100054/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100054/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100054/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100054/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100054/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100055,
            "attributes": {
                "created_at": "2024-05-21T17:15:14.196Z",
                "updated_at": "2024-05-21T17:15:14.196Z",
                "active": true,
                "username": "Chris.Bliss",
                "email": "Chris.Bliss@mail.com",
                "first_name": "Chris",
                "middle_name": "FA",
                "last_name": "Bliss",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100055"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100055/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100055/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100055/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100055/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103054
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100055/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100055/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100055/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100055/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100055/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100055/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100055/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100055/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100055/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100055/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100055/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100055/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100055/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100055/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100055/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100055/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100056,
            "attributes": {
                "created_at": "2024-05-21T17:15:14.391Z",
                "updated_at": "2024-05-21T17:15:14.391Z",
                "active": true,
                "username": "Patrick.Bliss",
                "email": "Patrick.Bliss@mail.com",
                "first_name": "Patrick",
                "middle_name": "PM_FC",
                "last_name": "Bliss",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100056"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100056/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100056/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100056/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100056/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103055
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100056/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100056/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100056/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100056/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100056/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100056/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100056/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100056/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100056/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100056/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100056/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100056/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100056/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100056/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100056/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100056/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100057,
            "attributes": {
                "created_at": "2024-05-21T17:15:14.627Z",
                "updated_at": "2024-05-21T17:15:14.627Z",
                "active": true,
                "username": "Alex.Bliss",
                "email": "Alex.Bliss@mail.com",
                "first_name": "Alex",
                "middle_name": "SM",
                "last_name": "Bliss",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100057"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100057/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101016
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100057/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100057/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100057/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103056
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100057/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100057/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100057/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100057/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100057/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100057/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100057/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100057/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100057/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100057/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100057/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100057/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100057/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100057/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100057/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100057/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100058,
            "attributes": {
                "created_at": "2024-05-21T17:15:14.857Z",
                "updated_at": "2024-05-21T17:15:14.857Z",
                "active": true,
                "username": "Les.Superior",
                "email": "Les.Superior@mail.com",
                "first_name": "Les",
                "middle_name": "FA",
                "last_name": "Superior",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100058"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100058/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100058/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100058/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100058/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103057
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100058/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100058/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100058/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100058/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100058/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100058/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100058/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100058/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100058/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100058/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100058/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100058/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100058/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100058/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100058/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100058/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100059,
            "attributes": {
                "created_at": "2024-05-21T17:15:15.068Z",
                "updated_at": "2024-05-21T17:15:15.068Z",
                "active": true,
                "username": "Peter.Superior",
                "email": "Peter.Superior@mail.com",
                "first_name": "Peter",
                "middle_name": "FA",
                "last_name": "Superior",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100059"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100059/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101017
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100059/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100059/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100059/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103058
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100059/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100059/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100059/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100059/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100059/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100059/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100059/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100059/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100059/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100059/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100059/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100059/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100059/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100059/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100059/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100059/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100060,
            "attributes": {
                "created_at": "2024-05-21T17:15:15.294Z",
                "updated_at": "2024-05-21T17:15:15.294Z",
                "active": true,
                "username": "Chris.CharlotteHeatAndAir",
                "email": "Chris.CharlotteHeatAndAir@mail.com",
                "first_name": "Chris",
                "middle_name": "FA",
                "last_name": "CharlotteHeatAndAir",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100060"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100060/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100060/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100060/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100060/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103059
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100060/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100060/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100060/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100060/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100060/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100060/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100060/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100060/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100060/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100060/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100060/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100060/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100060/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100060/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100060/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100060/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100061,
            "attributes": {
                "created_at": "2024-05-21T17:15:15.509Z",
                "updated_at": "2024-05-21T17:15:15.509Z",
                "active": true,
                "username": "Patrick.CharlotteHeatAndAir",
                "email": "Patrick.CharlotteHeatAndAir@mail.com",
                "first_name": "Patrick",
                "middle_name": "FA_PM_ES",
                "last_name": "CharlotteHeatAndAir",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100061"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100061/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100061/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100061/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100061/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103060
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100061/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100061/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100061/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100061/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100061/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100061/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100061/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100061/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100061/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100061/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100061/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100061/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100061/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100061/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100061/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100061/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100062,
            "attributes": {
                "created_at": "2024-05-21T17:15:15.744Z",
                "updated_at": "2024-05-21T17:15:15.744Z",
                "active": true,
                "username": "Alex.CharlotteHeatAndAir",
                "email": "Alex.CharlotteHeatAndAir@mail.com",
                "first_name": "Alex",
                "middle_name": "FA_PM_ES",
                "last_name": "CharlotteHeatAndAir",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100062"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100062/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101018
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100062/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100062/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100062/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103061
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100062/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100062/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100062/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100062/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100062/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100062/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100062/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100062/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100062/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100062/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100062/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100062/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100062/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100062/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100062/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100062/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100063,
            "attributes": {
                "created_at": "2024-05-21T17:15:15.946Z",
                "updated_at": "2024-05-21T17:15:15.946Z",
                "active": true,
                "username": "Les.Southern",
                "email": "Les.Southern@mail.com",
                "first_name": "Les",
                "middle_name": "FA",
                "last_name": "Southern",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100063"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100063/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101019
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100063/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100063/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100063/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103062
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100063/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100063/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100063/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100063/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100063/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100063/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100063/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100063/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100063/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100063/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100063/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100063/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100063/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100063/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100063/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100063/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100064,
            "attributes": {
                "created_at": "2024-05-21T17:15:16.237Z",
                "updated_at": "2024-05-21T17:15:16.237Z",
                "active": true,
                "username": "John.LifetimeRoofing",
                "email": "John.LifetimeRoofing@mail.com",
                "first_name": "John",
                "middle_name": "FA",
                "last_name": "LifetimeRoofing",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100064"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100064/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100064/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100064/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100064/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103063
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100064/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100064/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100064/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100064/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100064/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100064/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100064/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100064/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100064/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100064/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100064/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100064/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100064/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100064/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100064/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100064/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100065,
            "attributes": {
                "created_at": "2024-05-21T17:15:16.530Z",
                "updated_at": "2024-05-21T17:15:16.530Z",
                "active": true,
                "username": "David.LifetimeRoofing",
                "email": "David.LifetimeRoofing@mail.com",
                "first_name": "David",
                "middle_name": "SM_ES_FC",
                "last_name": "LifetimeRoofing",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100065"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100065/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100065/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100065/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100065/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103064
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100065/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100065/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100065/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100065/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100065/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100065/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100065/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100065/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100065/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100065/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100065/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100065/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100065/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100065/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100065/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100065/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100066,
            "attributes": {
                "created_at": "2024-05-21T17:15:16.753Z",
                "updated_at": "2024-05-21T17:15:16.753Z",
                "active": true,
                "username": "Tom.LifetimeRoofing",
                "email": "Tom.LifetimeRoofing@mail.com",
                "first_name": "Tom",
                "middle_name": "BK_OS",
                "last_name": "LifetimeRoofing",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100066"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100066/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101020
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100066/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100066/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100066/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103065
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100066/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100066/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100066/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100066/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100066/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100066/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100066/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100066/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100066/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100066/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100066/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100066/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100066/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100066/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100066/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100066/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100067,
            "attributes": {
                "created_at": "2024-05-21T17:15:16.963Z",
                "updated_at": "2024-05-21T17:15:16.963Z",
                "active": true,
                "username": "Peter.Koala",
                "email": "Peter.Koala@mail.com",
                "first_name": "Peter",
                "middle_name": "FA",
                "last_name": "Koala",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100067"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100067/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100067/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100067/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100067/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103066
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100067/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100067/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100067/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100067/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100067/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100067/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100067/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100067/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100067/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100067/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100067/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100067/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100067/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100067/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100067/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100067/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100068,
            "attributes": {
                "created_at": "2024-05-21T17:15:17.165Z",
                "updated_at": "2024-05-21T17:15:17.165Z",
                "active": true,
                "username": "Chris.Koala",
                "email": "Chris.Koala@mail.com",
                "first_name": "Chris",
                "middle_name": "FA",
                "last_name": "Koala",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100068"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100068/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101021
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100068/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100068/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100068/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103067
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100068/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100068/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100068/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100068/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100068/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100068/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100068/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100068/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100068/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100068/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100068/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100068/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100068/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100068/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100068/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100068/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100069,
            "attributes": {
                "created_at": "2024-05-21T17:15:17.383Z",
                "updated_at": "2024-05-21T17:15:17.383Z",
                "active": true,
                "username": "Patrick.StandardInsulation",
                "email": "Patrick.StandardInsulation@mail.com",
                "first_name": "Patrick",
                "middle_name": "FA",
                "last_name": "StandardInsulation",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100069"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100069/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100069/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100069/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100069/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103068
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100069/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100069/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100069/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100069/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100069/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100069/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100069/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100069/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100069/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100069/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100069/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100069/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100069/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100069/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100069/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100069/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100070,
            "attributes": {
                "created_at": "2024-05-21T17:15:17.597Z",
                "updated_at": "2024-05-21T17:15:17.597Z",
                "active": true,
                "username": "Alex.StandardInsulation",
                "email": "Alex.StandardInsulation@mail.com",
                "first_name": "Alex",
                "middle_name": "FC_PM",
                "last_name": "StandardInsulation",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100070"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100070/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101022
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100070/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100070/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100070/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103069
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100070/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100070/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100070/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100070/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100070/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100070/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100070/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100070/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100070/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100070/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100070/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100070/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100070/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100070/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100070/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100070/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100071,
            "attributes": {
                "created_at": "2024-05-21T17:15:17.814Z",
                "updated_at": "2024-05-21T17:15:17.814Z",
                "active": true,
                "username": "Les.Framing2",
                "email": "Les.Framing2@mail.com",
                "first_name": "Les",
                "middle_name": "FA",
                "last_name": "Framing2",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100071"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100071/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101023
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100071/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100071/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100071/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103070
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100071/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100071/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100071/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100071/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100071/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100071/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100071/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100071/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100071/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100071/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100071/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100071/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100071/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100071/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100071/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100071/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100072,
            "attributes": {
                "created_at": "2024-05-21T17:15:18.036Z",
                "updated_at": "2024-05-21T17:15:18.036Z",
                "active": true,
                "username": "John.JuanBricker",
                "email": "John.JuanBricker@mail.com",
                "first_name": "John",
                "middle_name": "FA",
                "last_name": "JuanBricker",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100072"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100072/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100072/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100072/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100072/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103071
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100072/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100072/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100072/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100072/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100072/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100072/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100072/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100072/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100072/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100072/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100072/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100072/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100072/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100072/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100072/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100072/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100073,
            "attributes": {
                "created_at": "2024-05-21T17:15:18.247Z",
                "updated_at": "2024-05-21T17:15:18.247Z",
                "active": true,
                "username": "David.JuanBricker",
                "email": "David.JuanBricker@mail.com",
                "first_name": "David",
                "middle_name": "FA",
                "last_name": "JuanBricker",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100073"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100073/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101024
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100073/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100073/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100073/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103072
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100073/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100073/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100073/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100073/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100073/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100073/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100073/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100073/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100073/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100073/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100073/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100073/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100073/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100073/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100073/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100073/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100074,
            "attributes": {
                "created_at": "2024-05-21T17:15:18.460Z",
                "updated_at": "2024-05-21T17:15:18.460Z",
                "active": true,
                "username": "Tom.GriffinMasonry",
                "email": "Tom.GriffinMasonry@mail.com",
                "first_name": "Tom",
                "middle_name": "FA",
                "last_name": "GriffinMasonry",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100074"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100074/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100074/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100074/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100074/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103073
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100074/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100074/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100074/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100074/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100074/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100074/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100074/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100074/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100074/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100074/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100074/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100074/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100074/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100074/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100074/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100074/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100075,
            "attributes": {
                "created_at": "2024-05-21T17:15:18.666Z",
                "updated_at": "2024-05-21T17:15:18.666Z",
                "active": true,
                "username": "Peter.GriffinMasonry",
                "email": "Peter.GriffinMasonry@mail.com",
                "first_name": "Peter",
                "middle_name": "PM_FC",
                "last_name": "GriffinMasonry",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100075"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100075/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101025
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100075/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100075/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100075/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103074
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100075/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100075/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100075/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100075/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100075/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100075/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100075/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100075/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100075/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100075/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100075/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100075/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100075/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100075/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100075/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100075/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100076,
            "attributes": {
                "created_at": "2024-05-21T17:15:18.893Z",
                "updated_at": "2024-05-21T17:15:18.893Z",
                "active": true,
                "username": "Chris.KaiserRoofing",
                "email": "Chris.KaiserRoofing@mail.com",
                "first_name": "Chris",
                "middle_name": "FA",
                "last_name": "KaiserRoofing",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100076"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100076/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100076/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100076/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100076/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100076/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100076/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100076/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100076/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103075
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100076/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100076/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100076/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100076/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100076/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100076/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100076/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100076/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100076/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100076/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100076/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100076/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100076/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100076/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100076/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100076/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100076/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100076/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100076/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100076/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100076/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100076/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100076/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100076/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100076/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100076/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100076/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100076/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100076/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100076/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100076/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100076/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100077,
            "attributes": {
                "created_at": "2024-05-21T17:15:19.096Z",
                "updated_at": "2024-05-21T17:15:19.096Z",
                "active": true,
                "username": "Patrick.KaiserRoofing",
                "email": "Patrick.KaiserRoofing@mail.com",
                "first_name": "Patrick",
                "middle_name": "FA",
                "last_name": "KaiserRoofing",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100077"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100077/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100077/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101026
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100077/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100077/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100077/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100077/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100077/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100077/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103076
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100077/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100077/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100077/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100077/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100077/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100077/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100077/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100077/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100077/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100077/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100077/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100077/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100077/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100077/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100077/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100077/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100077/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100077/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100077/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100077/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100077/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100077/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100077/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100077/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100077/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100077/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100077/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100077/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100077/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100077/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100077/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100077/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100078,
            "attributes": {
                "created_at": "2024-05-21T17:15:19.306Z",
                "updated_at": "2024-05-21T17:15:19.306Z",
                "active": true,
                "username": "Alex.CrownRoofing",
                "email": "Alex.CrownRoofing@mail.com",
                "first_name": "Alex",
                "middle_name": "FA",
                "last_name": "CrownRoofing",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100078"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100078/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100078/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100078/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100078/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100078/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100078/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100078/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100078/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103077
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100078/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100078/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100078/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100078/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100078/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100078/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100078/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100078/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100078/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100078/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100078/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100078/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100078/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100078/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100078/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100078/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100078/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100078/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100078/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100078/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100078/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100078/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100078/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100078/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100078/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100078/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100078/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100078/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100078/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100078/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100078/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100078/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100079,
            "attributes": {
                "created_at": "2024-05-21T17:15:19.514Z",
                "updated_at": "2024-05-21T17:15:19.514Z",
                "active": true,
                "username": "Les.CrownRoofing",
                "email": "Les.CrownRoofing@mail.com",
                "first_name": "Les",
                "middle_name": "PM_FC",
                "last_name": "CrownRoofing",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100079"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100079/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100079/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100079/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100079/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100079/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100079/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100079/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100079/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103078
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100079/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100079/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100079/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100079/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100079/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100079/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100079/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100079/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100079/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100079/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100079/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100079/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100079/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100079/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100079/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100079/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100079/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100079/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100079/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100079/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100079/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100079/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100079/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100079/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100079/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100079/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100079/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100079/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100079/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100079/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100079/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100079/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100080,
            "attributes": {
                "created_at": "2024-05-21T17:15:19.719Z",
                "updated_at": "2024-05-21T17:15:19.719Z",
                "active": true,
                "username": "John.CrownRoofing",
                "email": "John.CrownRoofing@mail.com",
                "first_name": "John",
                "middle_name": "PM_FC",
                "last_name": "CrownRoofing",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100080"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100080/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100080/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101027
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100080/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100080/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100080/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100080/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100080/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100080/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103079
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100080/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100080/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100080/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100080/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100080/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100080/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100080/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100080/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100080/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100080/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100080/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100080/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100080/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100080/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100080/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100080/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100080/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100080/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100080/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100080/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100080/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100080/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100080/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100080/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100080/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100080/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100080/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100080/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100080/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100080/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100080/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100080/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100081,
            "attributes": {
                "created_at": "2024-05-21T17:15:19.934Z",
                "updated_at": "2024-05-21T17:15:19.934Z",
                "active": true,
                "username": "Peter.CharlotteDC",
                "email": "Peter.CharlotteDC@mail.com",
                "first_name": "Peter",
                "middle_name": "FA",
                "last_name": "CharlotteDC",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100081"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100081/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100081/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100081/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100081/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100081/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100081/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100081/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100081/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103080
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100081/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100081/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100081/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100081/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100081/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100081/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100081/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100081/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100081/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100081/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100081/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100081/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100081/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100081/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100081/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100081/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100081/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100081/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100081/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100081/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100081/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100081/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100081/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100081/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100081/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100081/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100081/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100081/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100081/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100081/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100081/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100081/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100082,
            "attributes": {
                "created_at": "2024-05-21T17:15:20.137Z",
                "updated_at": "2024-05-21T17:15:20.137Z",
                "active": true,
                "username": "Chris.CharlotteDC",
                "email": "Chris.CharlotteDC@mail.com",
                "first_name": "Chris",
                "middle_name": "PM_FC",
                "last_name": "CharlotteDC",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100082"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100082/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100082/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101028
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100082/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100082/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100082/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100082/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100082/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100082/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103081
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100082/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100082/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100082/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100082/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100082/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100082/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100082/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100082/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100082/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100082/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100082/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100082/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100082/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100082/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100082/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100082/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100082/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100082/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100082/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100082/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100082/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100082/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100082/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100082/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100082/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100082/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100082/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100082/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100082/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100082/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100082/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100082/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100083,
            "attributes": {
                "created_at": "2024-05-21T17:15:20.344Z",
                "updated_at": "2024-05-21T17:15:20.344Z",
                "active": true,
                "username": "David.MarcoDrywaller",
                "email": "David.MarcoDrywaller@mail.com",
                "first_name": "David",
                "middle_name": "FA",
                "last_name": "MarcoDrywaller",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100083"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100083/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100083/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101029
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100083/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100083/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100083/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100083/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100083/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100083/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103082
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100083/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100083/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100083/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100083/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100083/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100083/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100083/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100083/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100083/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100083/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100083/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100083/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100083/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100083/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100083/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100083/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100083/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100083/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100083/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100083/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100083/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100083/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100083/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100083/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100083/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100083/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100083/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100083/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100083/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100083/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100083/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100083/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100084,
            "attributes": {
                "created_at": "2024-05-21T17:15:20.581Z",
                "updated_at": "2024-05-21T17:15:20.581Z",
                "active": true,
                "username": "Tom.MonroyPainting",
                "email": "Tom.MonroyPainting@mail.com",
                "first_name": "Tom",
                "middle_name": "FA",
                "last_name": "MonroyPainting",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100084"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100084/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100084/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101030
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100084/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100084/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100084/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100084/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100084/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100084/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103083
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100084/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100084/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100084/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100084/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100084/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100084/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100084/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100084/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100084/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100084/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100084/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100084/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100084/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100084/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100084/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100084/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100084/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100084/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100084/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100084/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100084/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100084/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100084/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100084/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100084/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100084/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100084/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100084/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100084/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100084/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100084/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100084/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100085,
            "attributes": {
                "created_at": "2024-05-21T17:15:20.788Z",
                "updated_at": "2024-05-21T17:15:20.788Z",
                "active": true,
                "username": "Patrick.JuanPainter",
                "email": "Patrick.JuanPainter@mail.com",
                "first_name": "Patrick",
                "middle_name": "FA",
                "last_name": "JuanPainter",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100085"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100085/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100085/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101031
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100085/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100085/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100085/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100085/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100085/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100085/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103084
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100085/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100085/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100085/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100085/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100085/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100085/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100085/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100085/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100085/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100085/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100085/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100085/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100085/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100085/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100085/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100085/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100085/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100085/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100085/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100085/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100085/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100085/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100085/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100085/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100085/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100085/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100085/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100085/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100085/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100085/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100085/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100085/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100086,
            "attributes": {
                "created_at": "2024-05-21T17:15:20.979Z",
                "updated_at": "2024-05-21T17:15:20.979Z",
                "active": true,
                "username": "Alex.GrierTrimmer",
                "email": "Alex.GrierTrimmer@mail.com",
                "first_name": "Alex",
                "middle_name": "FA",
                "last_name": "GrierTrimmer",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100086"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100086/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100086/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101032
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100086/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100086/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100086/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100086/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100086/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100086/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103085
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100086/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100086/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100086/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100086/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100086/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100086/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100086/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100086/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100086/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100086/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100086/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100086/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100086/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100086/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100086/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100086/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100086/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100086/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100086/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100086/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100086/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100086/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100086/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100086/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100086/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100086/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100086/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100086/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100086/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100086/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100086/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100086/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100087,
            "attributes": {
                "created_at": "2024-05-21T17:15:21.191Z",
                "updated_at": "2024-05-21T17:15:21.191Z",
                "active": true,
                "username": "Marcus.MarcusTrimmer",
                "email": "Marcus.MarcusTrimmer@mail.com",
                "first_name": "Marcus",
                "middle_name": "FA",
                "last_name": "MarcusTrimmer",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100087"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100087/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100087/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100087/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100087/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100087/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100087/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100087/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100087/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103086
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100087/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100087/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100087/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100087/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100087/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100087/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100087/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100087/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100087/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100087/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100087/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100087/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100087/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100087/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100087/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100087/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100087/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100087/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100087/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100087/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100087/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100087/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100087/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100087/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100087/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100087/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100087/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100087/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100087/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100087/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100087/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100087/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100088,
            "attributes": {
                "created_at": "2024-05-21T17:15:21.406Z",
                "updated_at": "2024-05-21T17:15:21.406Z",
                "active": true,
                "username": "Samuel.MarcusTrimmer",
                "email": "Samuel.MarcusTrimmer@mail.com",
                "first_name": "Samuel",
                "middle_name": "FA",
                "last_name": "MarcusTrimmer",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100088"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100088/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100088/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101033
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100088/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100088/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100088/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100088/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100088/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100088/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103087
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100088/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100088/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100088/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100088/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100088/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100088/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100088/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100088/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100088/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100088/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100088/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100088/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100088/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100088/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100088/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100088/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100088/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100088/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100088/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100088/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100088/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100088/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100088/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100088/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100088/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100088/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100088/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100088/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100088/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100088/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100088/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100088/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100089,
            "attributes": {
                "created_at": "2024-05-21T17:15:21.629Z",
                "updated_at": "2024-05-21T17:15:21.629Z",
                "active": true,
                "username": "Manuel.Landscape",
                "email": "Manuel.Landscape@mail.com",
                "first_name": "Manuel",
                "middle_name": "FA",
                "last_name": "Landscape",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100089"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100089/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100089/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101034
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100089/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100089/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100089/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100089/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100089/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100089/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103088
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100089/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100089/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100089/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100089/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100089/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100089/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100089/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100089/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100089/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100089/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100089/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100089/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100089/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100089/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100089/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100089/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100089/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100089/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100089/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100089/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100089/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100089/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100089/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100089/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100089/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100089/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100089/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100089/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100089/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100089/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100089/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100089/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100090,
            "attributes": {
                "created_at": "2024-05-21T17:15:21.828Z",
                "updated_at": "2024-05-21T17:15:21.828Z",
                "active": true,
                "username": "John.JHLandsacpe",
                "email": "John.JHLandsacpe@mail.com",
                "first_name": "John",
                "middle_name": "FA",
                "last_name": "JHLandsacpe",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100090"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100090/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100090/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100090/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100090/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100090/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100090/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100090/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100090/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103089
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100090/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100090/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100090/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100090/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100090/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100090/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100090/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100090/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100090/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100090/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100090/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100090/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100090/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100090/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100090/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100090/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100090/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100090/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100090/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100090/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100090/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100090/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100090/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100090/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100090/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100090/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100090/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100090/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100090/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100090/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100090/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100090/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100091,
            "attributes": {
                "created_at": "2024-05-21T17:15:22.030Z",
                "updated_at": "2024-05-21T17:15:22.030Z",
                "active": true,
                "username": "David.JHLandsacpe",
                "email": "David.JHLandsacpe@mail.com",
                "first_name": "David",
                "middle_name": "PM_FC",
                "last_name": "JHLandsacpe",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100091"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100091/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100091/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100091/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100091/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100091/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100091/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100091/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100091/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103090
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100091/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100091/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100091/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100091/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100091/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100091/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100091/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100091/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100091/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100091/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100091/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100091/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100091/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100091/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100091/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100091/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100091/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100091/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100091/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100091/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100091/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100091/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100091/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100091/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100091/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100091/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100091/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100091/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100091/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100091/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100091/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100091/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100092,
            "attributes": {
                "created_at": "2024-05-21T17:15:22.242Z",
                "updated_at": "2024-05-21T17:15:22.242Z",
                "active": true,
                "username": "Tom.AmericanCrownCabinets",
                "email": "Tom.AmericanCrownCabinets@mail.com",
                "first_name": "Tom",
                "middle_name": "FA",
                "last_name": "AmericanCrownCabinets",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100092"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100092/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100092/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101035
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100092/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100092/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100092/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100092/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100092/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100092/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103091
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100092/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100092/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100092/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100092/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100092/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100092/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100092/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100092/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100092/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100092/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100092/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100092/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100092/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100092/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100092/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100092/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100092/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100092/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100092/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100092/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100092/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100092/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100092/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100092/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100092/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100092/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100092/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100092/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100092/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100092/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100092/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100092/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100093,
            "attributes": {
                "created_at": "2024-05-21T17:15:22.451Z",
                "updated_at": "2024-05-21T17:15:22.451Z",
                "active": true,
                "username": "Patrick.AmericanCrownCabinets",
                "email": "Patrick.AmericanCrownCabinets@mail.com",
                "first_name": "Patrick",
                "middle_name": "PM_FC",
                "last_name": "AmericanCrownCabinets",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100093"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100093/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100093/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100093/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100093/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100093/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100093/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100093/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100093/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103092
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100093/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100093/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100093/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100093/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100093/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100093/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100093/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100093/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100093/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100093/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100093/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100093/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100093/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100093/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100093/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100093/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100093/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100093/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100093/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100093/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100093/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100093/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100093/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100093/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100093/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100093/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100093/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100093/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100093/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100093/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100093/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100093/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100094,
            "attributes": {
                "created_at": "2024-05-21T17:15:22.659Z",
                "updated_at": "2024-05-21T17:15:22.659Z",
                "active": true,
                "username": "Alex.eccabinetsandcountertops",
                "email": "Alex.eccabinetsandcountertops@mail.com",
                "first_name": "Alex",
                "middle_name": "FA",
                "last_name": "eccabinetsandcountertops",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100094"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100094/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100094/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101036
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100094/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100094/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100094/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100094/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100094/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100094/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103093
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100094/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100094/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100094/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100094/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100094/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100094/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100094/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100094/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100094/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100094/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100094/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100094/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100094/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100094/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100094/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100094/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100094/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100094/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100094/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100094/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100094/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100094/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100094/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100094/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100094/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100094/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100094/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100094/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100094/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100094/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100094/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100094/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100095,
            "attributes": {
                "created_at": "2024-05-21T17:15:22.880Z",
                "updated_at": "2024-05-21T17:15:22.880Z",
                "active": true,
                "username": "Marcus.eccabinetsandcountertops",
                "email": "Marcus.eccabinetsandcountertops@mail.com",
                "first_name": "Marcus",
                "middle_name": "PM_FC",
                "last_name": "eccabinetsandcountertops",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100095"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100095/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100095/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100095/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100095/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100095/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100095/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100095/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100095/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103094
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100095/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100095/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100095/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100095/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100095/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100095/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100095/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100095/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100095/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100095/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100095/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100095/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100095/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100095/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100095/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100095/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100095/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100095/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100095/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100095/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100095/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100095/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100095/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100095/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100095/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100095/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100095/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100095/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100095/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100095/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100095/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100095/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100096,
            "attributes": {
                "created_at": "2024-05-21T17:15:23.076Z",
                "updated_at": "2024-05-21T17:15:23.076Z",
                "active": true,
                "username": "Samuel.Lowes",
                "email": "Samuel.Lowes@mail.com",
                "first_name": "Samuel",
                "middle_name": "FA",
                "last_name": "Lowes",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100096"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100096/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100096/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101037
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100096/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100096/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100096/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100096/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100096/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100096/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103095
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100096/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100096/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100096/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100096/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100096/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100096/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100096/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100096/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100096/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100096/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100096/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100096/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100096/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100096/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100096/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100096/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100096/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100096/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100096/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100096/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100096/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100096/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100096/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100096/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100096/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100096/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100096/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100096/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100096/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100096/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100096/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100096/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100097,
            "attributes": {
                "created_at": "2024-05-21T17:15:23.272Z",
                "updated_at": "2024-05-21T17:15:23.272Z",
                "active": true,
                "username": "Manuel.neoflooring",
                "email": "Manuel.neoflooring@mail.com",
                "first_name": "Manuel",
                "middle_name": "FA",
                "last_name": "neoflooring",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100097"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100097/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100097/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100097/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100097/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100097/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100097/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100097/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100097/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103096
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100097/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100097/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100097/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100097/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100097/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100097/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100097/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100097/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100097/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100097/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100097/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100097/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100097/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100097/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100097/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100097/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100097/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100097/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100097/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100097/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100097/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100097/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100097/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100097/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100097/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100097/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100097/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100097/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100097/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100097/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100097/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100097/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100098,
            "attributes": {
                "created_at": "2024-05-21T17:15:23.484Z",
                "updated_at": "2024-05-21T17:15:23.484Z",
                "active": true,
                "username": "John.neoflooring",
                "email": "John.neoflooring@mail.com",
                "first_name": "John",
                "middle_name": "PM_FC",
                "last_name": "neoflooring",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100098"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100098/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100098/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101038
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100098/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100098/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100098/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100098/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100098/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100098/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103097
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100098/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100098/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100098/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100098/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100098/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100098/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100098/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100098/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100098/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100098/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100098/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100098/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100098/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100098/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100098/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100098/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100098/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100098/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100098/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100098/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100098/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100098/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100098/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100098/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100098/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100098/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100098/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100098/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100098/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100098/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100098/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100098/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100099,
            "attributes": {
                "created_at": "2024-05-21T17:15:23.691Z",
                "updated_at": "2024-05-21T17:15:23.691Z",
                "active": true,
                "username": "David.Joseconcrete",
                "email": "David.Joseconcrete@mail.com",
                "first_name": "David",
                "middle_name": "FA",
                "last_name": "Joseconcrete",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100099"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100099/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100099/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 101039
                    }
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100099/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100099/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100099/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100099/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100099/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100099/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103098
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100099/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100099/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100099/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100099/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100099/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100099/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100099/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100099/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100099/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100099/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100099/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100099/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100099/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100099/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100099/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100099/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100099/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100099/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100099/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100099/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100099/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100099/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100099/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100099/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100099/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100099/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100099/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100099/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100099/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100099/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100099/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100099/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100100,
            "attributes": {
                "created_at": "2024-05-21T17:15:23.912Z",
                "updated_at": "2024-05-21T17:15:23.912Z",
                "active": true,
                "username": "Patrick.Joseconcrete",
                "email": "Patrick.Joseconcrete@mail.com",
                "first_name": "Patrick",
                "middle_name": "PM_FC",
                "last_name": "Joseconcrete",
                "phone_number_mobile": "1234567890",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9999999999",
                "email_verified": true,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "",
                "language": [
                    ""
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "",
                "address2": "",
                "state": "",
                "zipcode": "",
                "profile_picture_url": "",
                "referral_code": "",
                "referred_by": "",
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": "business"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100100"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100100/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100100/business_creator"
                    },
                    "data": null
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100100/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100100/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100100/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100100/home_owner_projects"
                    },
                    "data": []
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100100/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100100/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 103099
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100100/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100100/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100100/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100100/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100100/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100100/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100100/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100100/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100100/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100100/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100100/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100100/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100100/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100100/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100100/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100100/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100100/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100100/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100100/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100100/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100100/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100100/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100100/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100100/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100100/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100100/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100100/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100100/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100100/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100100/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100100/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100100/clicks_activity"
                    },
                    "data": []
                }
            }
        }
    ],
    "meta": {
        "serialization": {
            "values": {
                "data.0.attributes.created_at": [
                    "Date"
                ],
                "data.0.attributes.updated_at": [
                    "Date"
                ],
                "data.1.attributes.created_at": [
                    "Date"
                ],
                "data.1.attributes.updated_at": [
                    "Date"
                ],
                "data.2.attributes.created_at": [
                    "Date"
                ],
                "data.2.attributes.updated_at": [
                    "Date"
                ],
                "data.3.attributes.created_at": [
                    "Date"
                ],
                "data.3.attributes.updated_at": [
                    "Date"
                ],
                "data.4.attributes.created_at": [
                    "Date"
                ],
                "data.4.attributes.updated_at": [
                    "Date"
                ],
                "data.5.attributes.created_at": [
                    "Date"
                ],
                "data.5.attributes.updated_at": [
                    "Date"
                ],
                "data.6.attributes.created_at": [
                    "Date"
                ],
                "data.6.attributes.updated_at": [
                    "Date"
                ],
                "data.7.attributes.created_at": [
                    "Date"
                ],
                "data.7.attributes.updated_at": [
                    "Date"
                ],
                "data.8.attributes.created_at": [
                    "Date"
                ],
                "data.8.attributes.updated_at": [
                    "Date"
                ],
                "data.9.attributes.created_at": [
                    "Date"
                ],
                "data.9.attributes.updated_at": [
                    "Date"
                ],
                "data.10.attributes.created_at": [
                    "Date"
                ],
                "data.10.attributes.updated_at": [
                    "Date"
                ],
                "data.11.attributes.created_at": [
                    "Date"
                ],
                "data.11.attributes.updated_at": [
                    "Date"
                ],
                "data.12.attributes.created_at": [
                    "Date"
                ],
                "data.12.attributes.updated_at": [
                    "Date"
                ],
                "data.13.attributes.created_at": [
                    "Date"
                ],
                "data.13.attributes.updated_at": [
                    "Date"
                ],
                "data.14.attributes.created_at": [
                    "Date"
                ],
                "data.14.attributes.updated_at": [
                    "Date"
                ],
                "data.15.attributes.created_at": [
                    "Date"
                ],
                "data.15.attributes.updated_at": [
                    "Date"
                ],
                "data.16.attributes.created_at": [
                    "Date"
                ],
                "data.16.attributes.updated_at": [
                    "Date"
                ],
                "data.17.attributes.created_at": [
                    "Date"
                ],
                "data.17.attributes.updated_at": [
                    "Date"
                ],
                "data.18.attributes.created_at": [
                    "Date"
                ],
                "data.18.attributes.updated_at": [
                    "Date"
                ],
                "data.19.attributes.created_at": [
                    "Date"
                ],
                "data.19.attributes.updated_at": [
                    "Date"
                ],
                "data.20.attributes.created_at": [
                    "Date"
                ],
                "data.20.attributes.updated_at": [
                    "Date"
                ],
                "data.21.attributes.created_at": [
                    "Date"
                ],
                "data.21.attributes.updated_at": [
                    "Date"
                ],
                "data.22.attributes.created_at": [
                    "Date"
                ],
                "data.22.attributes.updated_at": [
                    "Date"
                ],
                "data.23.attributes.created_at": [
                    "Date"
                ],
                "data.23.attributes.updated_at": [
                    "Date"
                ],
                "data.24.attributes.created_at": [
                    "Date"
                ],
                "data.24.attributes.updated_at": [
                    "Date"
                ],
                "data.25.attributes.created_at": [
                    "Date"
                ],
                "data.25.attributes.updated_at": [
                    "Date"
                ],
                "data.26.attributes.created_at": [
                    "Date"
                ],
                "data.26.attributes.updated_at": [
                    "Date"
                ],
                "data.27.attributes.created_at": [
                    "Date"
                ],
                "data.27.attributes.updated_at": [
                    "Date"
                ],
                "data.28.attributes.created_at": [
                    "Date"
                ],
                "data.28.attributes.updated_at": [
                    "Date"
                ],
                "data.29.attributes.created_at": [
                    "Date"
                ],
                "data.29.attributes.updated_at": [
                    "Date"
                ],
                "data.30.attributes.created_at": [
                    "Date"
                ],
                "data.30.attributes.updated_at": [
                    "Date"
                ],
                "data.31.attributes.created_at": [
                    "Date"
                ],
                "data.31.attributes.updated_at": [
                    "Date"
                ],
                "data.32.attributes.created_at": [
                    "Date"
                ],
                "data.32.attributes.updated_at": [
                    "Date"
                ],
                "data.33.attributes.created_at": [
                    "Date"
                ],
                "data.33.attributes.updated_at": [
                    "Date"
                ],
                "data.34.attributes.created_at": [
                    "Date"
                ],
                "data.34.attributes.updated_at": [
                    "Date"
                ],
                "data.35.attributes.created_at": [
                    "Date"
                ],
                "data.35.attributes.updated_at": [
                    "Date"
                ],
                "data.36.attributes.created_at": [
                    "Date"
                ],
                "data.36.attributes.updated_at": [
                    "Date"
                ],
                "data.37.attributes.created_at": [
                    "Date"
                ],
                "data.37.attributes.updated_at": [
                    "Date"
                ],
                "data.38.attributes.created_at": [
                    "Date"
                ],
                "data.38.attributes.updated_at": [
                    "Date"
                ],
                "data.39.attributes.created_at": [
                    "Date"
                ],
                "data.39.attributes.updated_at": [
                    "Date"
                ],
                "data.40.attributes.created_at": [
                    "Date"
                ],
                "data.40.attributes.updated_at": [
                    "Date"
                ],
                "data.41.attributes.created_at": [
                    "Date"
                ],
                "data.41.attributes.updated_at": [
                    "Date"
                ],
                "data.42.attributes.created_at": [
                    "Date"
                ],
                "data.42.attributes.updated_at": [
                    "Date"
                ],
                "data.43.attributes.created_at": [
                    "Date"
                ],
                "data.43.attributes.updated_at": [
                    "Date"
                ],
                "data.44.attributes.created_at": [
                    "Date"
                ],
                "data.44.attributes.updated_at": [
                    "Date"
                ],
                "data.45.attributes.created_at": [
                    "Date"
                ],
                "data.45.attributes.updated_at": [
                    "Date"
                ],
                "data.46.attributes.created_at": [
                    "Date"
                ],
                "data.46.attributes.updated_at": [
                    "Date"
                ],
                "data.47.attributes.created_at": [
                    "Date"
                ],
                "data.47.attributes.updated_at": [
                    "Date"
                ],
                "data.48.attributes.created_at": [
                    "Date"
                ],
                "data.48.attributes.updated_at": [
                    "Date"
                ],
                "data.49.attributes.created_at": [
                    "Date"
                ],
                "data.49.attributes.updated_at": [
                    "Date"
                ],
                "data.50.attributes.created_at": [
                    "Date"
                ],
                "data.50.attributes.updated_at": [
                    "Date"
                ],
                "data.51.attributes.created_at": [
                    "Date"
                ],
                "data.51.attributes.updated_at": [
                    "Date"
                ],
                "data.52.attributes.created_at": [
                    "Date"
                ],
                "data.52.attributes.updated_at": [
                    "Date"
                ],
                "data.53.attributes.created_at": [
                    "Date"
                ],
                "data.53.attributes.updated_at": [
                    "Date"
                ],
                "data.54.attributes.created_at": [
                    "Date"
                ],
                "data.54.attributes.updated_at": [
                    "Date"
                ],
                "data.55.attributes.created_at": [
                    "Date"
                ],
                "data.55.attributes.updated_at": [
                    "Date"
                ],
                "data.56.attributes.created_at": [
                    "Date"
                ],
                "data.56.attributes.updated_at": [
                    "Date"
                ],
                "data.57.attributes.created_at": [
                    "Date"
                ],
                "data.57.attributes.updated_at": [
                    "Date"
                ],
                "data.58.attributes.created_at": [
                    "Date"
                ],
                "data.58.attributes.updated_at": [
                    "Date"
                ],
                "data.59.attributes.created_at": [
                    "Date"
                ],
                "data.59.attributes.updated_at": [
                    "Date"
                ],
                "data.60.attributes.created_at": [
                    "Date"
                ],
                "data.60.attributes.updated_at": [
                    "Date"
                ],
                "data.61.attributes.created_at": [
                    "Date"
                ],
                "data.61.attributes.updated_at": [
                    "Date"
                ],
                "data.62.attributes.created_at": [
                    "Date"
                ],
                "data.62.attributes.updated_at": [
                    "Date"
                ],
                "data.63.attributes.created_at": [
                    "Date"
                ],
                "data.63.attributes.updated_at": [
                    "Date"
                ],
                "data.64.attributes.created_at": [
                    "Date"
                ],
                "data.64.attributes.updated_at": [
                    "Date"
                ],
                "data.65.attributes.created_at": [
                    "Date"
                ],
                "data.65.attributes.updated_at": [
                    "Date"
                ],
                "data.66.attributes.created_at": [
                    "Date"
                ],
                "data.66.attributes.updated_at": [
                    "Date"
                ],
                "data.67.attributes.created_at": [
                    "Date"
                ],
                "data.67.attributes.updated_at": [
                    "Date"
                ],
                "data.68.attributes.created_at": [
                    "Date"
                ],
                "data.68.attributes.updated_at": [
                    "Date"
                ],
                "data.69.attributes.created_at": [
                    "Date"
                ],
                "data.69.attributes.updated_at": [
                    "Date"
                ],
                "data.70.attributes.created_at": [
                    "Date"
                ],
                "data.70.attributes.updated_at": [
                    "Date"
                ],
                "data.71.attributes.created_at": [
                    "Date"
                ],
                "data.71.attributes.updated_at": [
                    "Date"
                ],
                "data.72.attributes.created_at": [
                    "Date"
                ],
                "data.72.attributes.updated_at": [
                    "Date"
                ],
                "data.73.attributes.created_at": [
                    "Date"
                ],
                "data.73.attributes.updated_at": [
                    "Date"
                ],
                "data.74.attributes.created_at": [
                    "Date"
                ],
                "data.74.attributes.updated_at": [
                    "Date"
                ],
                "data.75.attributes.created_at": [
                    "Date"
                ],
                "data.75.attributes.updated_at": [
                    "Date"
                ],
                "data.76.attributes.created_at": [
                    "Date"
                ],
                "data.76.attributes.updated_at": [
                    "Date"
                ],
                "data.77.attributes.created_at": [
                    "Date"
                ],
                "data.77.attributes.updated_at": [
                    "Date"
                ],
                "data.78.attributes.created_at": [
                    "Date"
                ],
                "data.78.attributes.updated_at": [
                    "Date"
                ],
                "data.79.attributes.created_at": [
                    "Date"
                ],
                "data.79.attributes.updated_at": [
                    "Date"
                ],
                "data.80.attributes.created_at": [
                    "Date"
                ],
                "data.80.attributes.updated_at": [
                    "Date"
                ],
                "data.81.attributes.created_at": [
                    "Date"
                ],
                "data.81.attributes.updated_at": [
                    "Date"
                ],
                "data.82.attributes.created_at": [
                    "Date"
                ],
                "data.82.attributes.updated_at": [
                    "Date"
                ],
                "data.83.attributes.created_at": [
                    "Date"
                ],
                "data.83.attributes.updated_at": [
                    "Date"
                ],
                "data.84.attributes.created_at": [
                    "Date"
                ],
                "data.84.attributes.updated_at": [
                    "Date"
                ],
                "data.85.attributes.created_at": [
                    "Date"
                ],
                "data.85.attributes.updated_at": [
                    "Date"
                ],
                "data.86.attributes.created_at": [
                    "Date"
                ],
                "data.86.attributes.updated_at": [
                    "Date"
                ],
                "data.87.attributes.created_at": [
                    "Date"
                ],
                "data.87.attributes.updated_at": [
                    "Date"
                ],
                "data.88.attributes.created_at": [
                    "Date"
                ],
                "data.88.attributes.updated_at": [
                    "Date"
                ],
                "data.89.attributes.created_at": [
                    "Date"
                ],
                "data.89.attributes.updated_at": [
                    "Date"
                ],
                "data.90.attributes.created_at": [
                    "Date"
                ],
                "data.90.attributes.updated_at": [
                    "Date"
                ],
                "data.91.attributes.created_at": [
                    "Date"
                ],
                "data.91.attributes.updated_at": [
                    "Date"
                ],
                "data.92.attributes.created_at": [
                    "Date"
                ],
                "data.92.attributes.updated_at": [
                    "Date"
                ],
                "data.93.attributes.created_at": [
                    "Date"
                ],
                "data.93.attributes.updated_at": [
                    "Date"
                ],
                "data.94.attributes.created_at": [
                    "Date"
                ],
                "data.94.attributes.updated_at": [
                    "Date"
                ],
                "data.95.attributes.created_at": [
                    "Date"
                ],
                "data.95.attributes.updated_at": [
                    "Date"
                ],
                "data.96.attributes.created_at": [
                    "Date"
                ],
                "data.96.attributes.updated_at": [
                    "Date"
                ],
                "data.97.attributes.created_at": [
                    "Date"
                ],
                "data.97.attributes.updated_at": [
                    "Date"
                ],
                "data.98.attributes.created_at": [
                    "Date"
                ],
                "data.98.attributes.updated_at": [
                    "Date"
                ],
                "data.99.attributes.created_at": [
                    "Date"
                ],
                "data.99.attributes.updated_at": [
                    "Date"
                ]
            }
        },
        "total": 115
    }
})
}