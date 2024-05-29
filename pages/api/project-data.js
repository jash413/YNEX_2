export default function handler(req, res) {
    const json = {
            "jsonapi": {
                "version": "1.1"
            },
            "links": {
                "self": "http://localhostx:3000/api/project",
                "first": "http://localhostx:3000/api/project?page%5Blimit%5D=100",
                "last": "http://localhostx:3000/api/project?page%5Boffset%5D=0",
                "prev": null,
                "next": null
            },
            "data": [
                {
                    "type": "project",
                    "id": 200001,
                    "attributes": {
                        "created_at": "2024-05-21T17:15:39.986Z",
                        "updated_at": "2024-05-21T17:15:39.986Z",
                        "active": true,
                        "home_owner_id": 100001,
                        "gc_business_id": 101000,
                        "name": "Spieth's home",
                        "description": "New custom home of 3000 sq footage and wants to make sure all top of the line appliances and flooring, cabinets",
                        "address1": "8806 AlbrightRd",
                        "address2": "",
                        "state": "NC",
                        "zipcode": "27612",
                        "city": "Raleigh",
                        "status": "in progress",
                        "project_type": "CustomHome",
                        "contract_type": "fixed",
                        "budget_estimated": "200000",
                        "actual_spent": "70000",
                        "percentage_complete": "19",
                        "notes": "Contractstrated",
                        "start_date": "2024-02-22T00:00:00.000Z",
                        "end_date": null,
                        "exception_notes": null,
                        "exception_dates": [],
                        "document_urls": [
                            "https://storage.cloud.google.com/buildify_user_uploads/projectimages/plan01.jpeg"
                        ]
                    },
                    "links": {
                        "self": "http://localhostx:3000/api/project/200001"
                    },
                    "relationships": {
                        "home_owner": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200001/relationships/home_owner",
                                "related": "http://localhostx:3000/api/project/200001/home_owner"
                            },
                            "data": {
                                "type": "user",
                                "id": 100001
                            }
                        },
                        "gc_business": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200001/relationships/gc_business",
                                "related": "http://localhostx:3000/api/project/200001/gc_business"
                            },
                            "data": {
                                "type": "business",
                                "id": 101000
                            }
                        },
                        "project_assignments": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200001/relationships/project_assignments",
                                "related": "http://localhostx:3000/api/project/200001/project_assignments"
                            },
                            "data": [
                                {
                                    "type": "project_Assignments",
                                    "id": 300128
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300129
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300130
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300158
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300159
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300001
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300013
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300014
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300015
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300016
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300017
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300076
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300088
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300100
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300101
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300102
                                }
                            ]
                        },
                        "tasks": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200001/relationships/tasks",
                                "related": "http://localhostx:3000/api/project/200001/tasks"
                            },
                            "data": [
                                {
                                    "type": "task",
                                    "id": 1
                                },
                                {
                                    "type": "task",
                                    "id": 2
                                },
                                {
                                    "type": "task",
                                    "id": 3
                                },
                                {
                                    "type": "task",
                                    "id": 4
                                },
                                {
                                    "type": "task",
                                    "id": 5
                                },
                                {
                                    "type": "task",
                                    "id": 6
                                },
                                {
                                    "type": "task",
                                    "id": 7
                                },
                                {
                                    "type": "task",
                                    "id": 8
                                },
                                {
                                    "type": "task",
                                    "id": 9
                                },
                                {
                                    "type": "task",
                                    "id": 10
                                },
                                {
                                    "type": "task",
                                    "id": 11
                                },
                                {
                                    "type": "task",
                                    "id": 12
                                },
                                {
                                    "type": "task",
                                    "id": 13
                                },
                                {
                                    "type": "task",
                                    "id": 14
                                },
                                {
                                    "type": "task",
                                    "id": 15
                                },
                                {
                                    "type": "task",
                                    "id": 16
                                },
                                {
                                    "type": "task",
                                    "id": 17
                                },
                                {
                                    "type": "task",
                                    "id": 18
                                },
                                {
                                    "type": "task",
                                    "id": 19
                                },
                                {
                                    "type": "task",
                                    "id": 20
                                },
                                {
                                    "type": "task",
                                    "id": 21
                                },
                                {
                                    "type": "task",
                                    "id": 22
                                },
                                {
                                    "type": "task",
                                    "id": 23
                                },
                                {
                                    "type": "task",
                                    "id": 24
                                },
                                {
                                    "type": "task",
                                    "id": 25
                                },
                                {
                                    "type": "task",
                                    "id": 26
                                },
                                {
                                    "type": "task",
                                    "id": 27
                                },
                                {
                                    "type": "task",
                                    "id": 28
                                },
                                {
                                    "type": "task",
                                    "id": 29
                                },
                                {
                                    "type": "task",
                                    "id": 30
                                },
                                {
                                    "type": "task",
                                    "id": 31
                                },
                                {
                                    "type": "task",
                                    "id": 32
                                },
                                {
                                    "type": "task",
                                    "id": 33
                                },
                                {
                                    "type": "task",
                                    "id": 34
                                },
                                {
                                    "type": "task",
                                    "id": 35
                                },
                                {
                                    "type": "task",
                                    "id": 36
                                },
                                {
                                    "type": "task",
                                    "id": 37
                                },
                                {
                                    "type": "task",
                                    "id": 38
                                },
                                {
                                    "type": "task",
                                    "id": 39
                                },
                                {
                                    "type": "task",
                                    "id": 40
                                },
                                {
                                    "type": "task",
                                    "id": 41
                                },
                                {
                                    "type": "task",
                                    "id": 42
                                },
                                {
                                    "type": "task",
                                    "id": 43
                                },
                                {
                                    "type": "task",
                                    "id": 44
                                },
                                {
                                    "type": "task",
                                    "id": 45
                                },
                                {
                                    "type": "task",
                                    "id": 46
                                }
                            ]
                        },
                        "punch_list": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200001/relationships/punch_list",
                                "related": "http://localhostx:3000/api/project/200001/punch_list"
                            },
                            "data": []
                        },
                        "daily_logs": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200001/relationships/daily_logs",
                                "related": "http://localhostx:3000/api/project/200001/daily_logs"
                            },
                            "data": []
                        },
                        "progression_notes": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200001/relationships/progression_notes",
                                "related": "http://localhostx:3000/api/project/200001/progression_notes"
                            },
                            "data": []
                        },
                        "change_orders": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200001/relationships/change_orders",
                                "related": "http://localhostx:3000/api/project/200001/change_orders"
                            },
                            "data": []
                        },
                        "specications": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200001/relationships/specications",
                                "related": "http://localhostx:3000/api/project/200001/specications"
                            },
                            "data": []
                        },
                        "selections": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200001/relationships/selections",
                                "related": "http://localhostx:3000/api/project/200001/selections"
                            },
                            "data": []
                        },
                        "bids": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200001/relationships/bids",
                                "related": "http://localhostx:3000/api/project/200001/bids"
                            },
                            "data": []
                        },
                        "files": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200001/relationships/files",
                                "related": "http://localhostx:3000/api/project/200001/files"
                            },
                            "data": []
                        }
                    }
                },
                {
                    "type": "project",
                    "id": 200002,
                    "attributes": {
                        "created_at": "2024-05-21T17:15:40.203Z",
                        "updated_at": "2024-05-21T17:15:40.203Z",
                        "active": true,
                        "home_owner_id": 100002,
                        "gc_business_id": 101000,
                        "name": "Fowler's home",
                        "description": "new custom home , around 2500 sq ft, in a hilly location on downward slope. very large acreage",
                        "address1": "1314 Edwards Pond Ct",
                        "address2": "",
                        "state": "NC",
                        "zipcode": "27502",
                        "city": "Apex",
                        "status": "not yet started",
                        "project_type": "CustomHome",
                        "contract_type": "costplus",
                        "budget_estimated": "220000",
                        "actual_spent": "10001",
                        "percentage_complete": "8",
                        "notes": "Constructionstarted-1",
                        "start_date": "2024-04-22T00:00:00.000Z",
                        "end_date": null,
                        "exception_notes": null,
                        "exception_dates": [],
                        "document_urls": [
                            "https://storage.cloud.google.com/buildify_user_uploads/projectimages/plan02.jpeg, https://storage.cloud.google.com/buildify_user_uploads/projectimages/plan02a.jpeg"
                        ]
                    },
                    "links": {
                        "self": "http://localhostx:3000/api/project/200002"
                    },
                    "relationships": {
                        "home_owner": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200002/relationships/home_owner",
                                "related": "http://localhostx:3000/api/project/200002/home_owner"
                            },
                            "data": {
                                "type": "user",
                                "id": 100002
                            }
                        },
                        "gc_business": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200002/relationships/gc_business",
                                "related": "http://localhostx:3000/api/project/200002/gc_business"
                            },
                            "data": {
                                "type": "business",
                                "id": 101000
                            }
                        },
                        "project_assignments": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200002/relationships/project_assignments",
                                "related": "http://localhostx:3000/api/project/200002/project_assignments"
                            },
                            "data": [
                                {
                                    "type": "project_Assignments",
                                    "id": 300131
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300132
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300160
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300161
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300162
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300163
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300164
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300165
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300002
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300018
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300019
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300077
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300089
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300103
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300104
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300105
                                }
                            ]
                        },
                        "tasks": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200002/relationships/tasks",
                                "related": "http://localhostx:3000/api/project/200002/tasks"
                            },
                            "data": [
                                {
                                    "type": "task",
                                    "id": 47
                                },
                                {
                                    "type": "task",
                                    "id": 48
                                },
                                {
                                    "type": "task",
                                    "id": 49
                                },
                                {
                                    "type": "task",
                                    "id": 50
                                },
                                {
                                    "type": "task",
                                    "id": 51
                                },
                                {
                                    "type": "task",
                                    "id": 52
                                },
                                {
                                    "type": "task",
                                    "id": 53
                                },
                                {
                                    "type": "task",
                                    "id": 54
                                },
                                {
                                    "type": "task",
                                    "id": 55
                                },
                                {
                                    "type": "task",
                                    "id": 56
                                },
                                {
                                    "type": "task",
                                    "id": 57
                                },
                                {
                                    "type": "task",
                                    "id": 58
                                },
                                {
                                    "type": "task",
                                    "id": 59
                                },
                                {
                                    "type": "task",
                                    "id": 60
                                },
                                {
                                    "type": "task",
                                    "id": 61
                                },
                                {
                                    "type": "task",
                                    "id": 62
                                },
                                {
                                    "type": "task",
                                    "id": 63
                                },
                                {
                                    "type": "task",
                                    "id": 64
                                },
                                {
                                    "type": "task",
                                    "id": 65
                                },
                                {
                                    "type": "task",
                                    "id": 66
                                },
                                {
                                    "type": "task",
                                    "id": 67
                                },
                                {
                                    "type": "task",
                                    "id": 68
                                },
                                {
                                    "type": "task",
                                    "id": 69
                                },
                                {
                                    "type": "task",
                                    "id": 70
                                },
                                {
                                    "type": "task",
                                    "id": 71
                                },
                                {
                                    "type": "task",
                                    "id": 72
                                },
                                {
                                    "type": "task",
                                    "id": 73
                                },
                                {
                                    "type": "task",
                                    "id": 74
                                },
                                {
                                    "type": "task",
                                    "id": 75
                                },
                                {
                                    "type": "task",
                                    "id": 76
                                },
                                {
                                    "type": "task",
                                    "id": 77
                                },
                                {
                                    "type": "task",
                                    "id": 78
                                },
                                {
                                    "type": "task",
                                    "id": 79
                                },
                                {
                                    "type": "task",
                                    "id": 80
                                },
                                {
                                    "type": "task",
                                    "id": 81
                                },
                                {
                                    "type": "task",
                                    "id": 82
                                },
                                {
                                    "type": "task",
                                    "id": 83
                                },
                                {
                                    "type": "task",
                                    "id": 84
                                },
                                {
                                    "type": "task",
                                    "id": 85
                                },
                                {
                                    "type": "task",
                                    "id": 86
                                },
                                {
                                    "type": "task",
                                    "id": 87
                                },
                                {
                                    "type": "task",
                                    "id": 88
                                },
                                {
                                    "type": "task",
                                    "id": 89
                                },
                                {
                                    "type": "task",
                                    "id": 90
                                },
                                {
                                    "type": "task",
                                    "id": 91
                                },
                                {
                                    "type": "task",
                                    "id": 92
                                }
                            ]
                        },
                        "punch_list": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200002/relationships/punch_list",
                                "related": "http://localhostx:3000/api/project/200002/punch_list"
                            },
                            "data": []
                        },
                        "daily_logs": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200002/relationships/daily_logs",
                                "related": "http://localhostx:3000/api/project/200002/daily_logs"
                            },
                            "data": []
                        },
                        "progression_notes": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200002/relationships/progression_notes",
                                "related": "http://localhostx:3000/api/project/200002/progression_notes"
                            },
                            "data": []
                        },
                        "change_orders": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200002/relationships/change_orders",
                                "related": "http://localhostx:3000/api/project/200002/change_orders"
                            },
                            "data": []
                        },
                        "specications": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200002/relationships/specications",
                                "related": "http://localhostx:3000/api/project/200002/specications"
                            },
                            "data": []
                        },
                        "selections": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200002/relationships/selections",
                                "related": "http://localhostx:3000/api/project/200002/selections"
                            },
                            "data": []
                        },
                        "bids": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200002/relationships/bids",
                                "related": "http://localhostx:3000/api/project/200002/bids"
                            },
                            "data": []
                        },
                        "files": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200002/relationships/files",
                                "related": "http://localhostx:3000/api/project/200002/files"
                            },
                            "data": []
                        }
                    }
                },
                {
                    "type": "project",
                    "id": 200003,
                    "attributes": {
                        "created_at": "2024-05-21T17:15:40.415Z",
                        "updated_at": "2024-05-21T17:15:40.415Z",
                        "active": true,
                        "home_owner_id": 100003,
                        "gc_business_id": 101000,
                        "name": "Dechambeu's home",
                        "description": "Addition of a garage, extra media room, bed and 2 bathrooms, totaling 2000 sq foot heated space",
                        "address1": "5132 Daisy St",
                        "address2": "",
                        "state": "NC",
                        "zipcode": "27526",
                        "city": "FuquayVarina",
                        "status": "completed",
                        "project_type": "Remodel",
                        "contract_type": "ubuildit",
                        "budget_estimated": "240000",
                        "actual_spent": "120002",
                        "percentage_complete": "40",
                        "notes": "Constructionstarted-2",
                        "start_date": "2024-01-22T00:00:00.000Z",
                        "end_date": null,
                        "exception_notes": null,
                        "exception_dates": [],
                        "document_urls": [
                            "https://storage.cloud.google.com/buildify_user_uploads/projectimages/plan03.jpeg"
                        ]
                    },
                    "links": {
                        "self": "http://localhostx:3000/api/project/200003"
                    },
                    "relationships": {
                        "home_owner": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200003/relationships/home_owner",
                                "related": "http://localhostx:3000/api/project/200003/home_owner"
                            },
                            "data": {
                                "type": "user",
                                "id": 100003
                            }
                        },
                        "gc_business": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200003/relationships/gc_business",
                                "related": "http://localhostx:3000/api/project/200003/gc_business"
                            },
                            "data": {
                                "type": "business",
                                "id": 101000
                            }
                        },
                        "project_assignments": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200003/relationships/project_assignments",
                                "related": "http://localhostx:3000/api/project/200003/project_assignments"
                            },
                            "data": [
                                {
                                    "type": "project_Assignments",
                                    "id": 300133
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300134
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300135
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300166
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300003
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300020
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300021
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300022
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300023
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300024
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300025
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300026
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300078
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300090
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300106
                                }
                            ]
                        },
                        "tasks": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200003/relationships/tasks",
                                "related": "http://localhostx:3000/api/project/200003/tasks"
                            },
                            "data": [
                                {
                                    "type": "task",
                                    "id": 93
                                },
                                {
                                    "type": "task",
                                    "id": 94
                                },
                                {
                                    "type": "task",
                                    "id": 95
                                },
                                {
                                    "type": "task",
                                    "id": 96
                                },
                                {
                                    "type": "task",
                                    "id": 97
                                },
                                {
                                    "type": "task",
                                    "id": 98
                                },
                                {
                                    "type": "task",
                                    "id": 99
                                },
                                {
                                    "type": "task",
                                    "id": 100
                                },
                                {
                                    "type": "task",
                                    "id": 101
                                },
                                {
                                    "type": "task",
                                    "id": 102
                                },
                                {
                                    "type": "task",
                                    "id": 103
                                },
                                {
                                    "type": "task",
                                    "id": 104
                                },
                                {
                                    "type": "task",
                                    "id": 105
                                },
                                {
                                    "type": "task",
                                    "id": 106
                                },
                                {
                                    "type": "task",
                                    "id": 107
                                },
                                {
                                    "type": "task",
                                    "id": 108
                                },
                                {
                                    "type": "task",
                                    "id": 109
                                },
                                {
                                    "type": "task",
                                    "id": 110
                                },
                                {
                                    "type": "task",
                                    "id": 111
                                },
                                {
                                    "type": "task",
                                    "id": 112
                                },
                                {
                                    "type": "task",
                                    "id": 113
                                },
                                {
                                    "type": "task",
                                    "id": 114
                                },
                                {
                                    "type": "task",
                                    "id": 115
                                },
                                {
                                    "type": "task",
                                    "id": 116
                                },
                                {
                                    "type": "task",
                                    "id": 117
                                },
                                {
                                    "type": "task",
                                    "id": 118
                                },
                                {
                                    "type": "task",
                                    "id": 119
                                },
                                {
                                    "type": "task",
                                    "id": 120
                                },
                                {
                                    "type": "task",
                                    "id": 121
                                },
                                {
                                    "type": "task",
                                    "id": 122
                                },
                                {
                                    "type": "task",
                                    "id": 123
                                },
                                {
                                    "type": "task",
                                    "id": 124
                                },
                                {
                                    "type": "task",
                                    "id": 125
                                },
                                {
                                    "type": "task",
                                    "id": 126
                                },
                                {
                                    "type": "task",
                                    "id": 127
                                },
                                {
                                    "type": "task",
                                    "id": 128
                                },
                                {
                                    "type": "task",
                                    "id": 129
                                },
                                {
                                    "type": "task",
                                    "id": 130
                                },
                                {
                                    "type": "task",
                                    "id": 131
                                },
                                {
                                    "type": "task",
                                    "id": 132
                                },
                                {
                                    "type": "task",
                                    "id": 133
                                },
                                {
                                    "type": "task",
                                    "id": 134
                                },
                                {
                                    "type": "task",
                                    "id": 135
                                },
                                {
                                    "type": "task",
                                    "id": 136
                                },
                                {
                                    "type": "task",
                                    "id": 137
                                },
                                {
                                    "type": "task",
                                    "id": 138
                                }
                            ]
                        },
                        "punch_list": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200003/relationships/punch_list",
                                "related": "http://localhostx:3000/api/project/200003/punch_list"
                            },
                            "data": []
                        },
                        "daily_logs": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200003/relationships/daily_logs",
                                "related": "http://localhostx:3000/api/project/200003/daily_logs"
                            },
                            "data": []
                        },
                        "progression_notes": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200003/relationships/progression_notes",
                                "related": "http://localhostx:3000/api/project/200003/progression_notes"
                            },
                            "data": []
                        },
                        "change_orders": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200003/relationships/change_orders",
                                "related": "http://localhostx:3000/api/project/200003/change_orders"
                            },
                            "data": []
                        },
                        "specications": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200003/relationships/specications",
                                "related": "http://localhostx:3000/api/project/200003/specications"
                            },
                            "data": []
                        },
                        "selections": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200003/relationships/selections",
                                "related": "http://localhostx:3000/api/project/200003/selections"
                            },
                            "data": []
                        },
                        "bids": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200003/relationships/bids",
                                "related": "http://localhostx:3000/api/project/200003/bids"
                            },
                            "data": []
                        },
                        "files": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200003/relationships/files",
                                "related": "http://localhostx:3000/api/project/200003/files"
                            },
                            "data": []
                        }
                    }
                },
                {
                    "type": "project",
                    "id": 200004,
                    "attributes": {
                        "created_at": "2024-05-21T17:15:40.626Z",
                        "updated_at": "2024-05-21T17:15:40.626Z",
                        "active": true,
                        "home_owner_id": 100004,
                        "gc_business_id": 101001,
                        "name": "Rham's home",
                        "description": "New Home on a 0.92 acre lot with 2800 sq footage with 3 bed rooms and 3 bath rooms and two car parking spaces.",
                        "address1": "114 Debanne Rd",
                        "address2": "",
                        "state": "NC",
                        "zipcode": "27301",
                        "city": "McLeansville",
                        "status": "in progress",
                        "project_type": "CustomHome",
                        "contract_type": "costplus",
                        "budget_estimated": "260000",
                        "actual_spent": "105000",
                        "percentage_complete": "46",
                        "notes": "Constructionstarted-3",
                        "start_date": "2024-05-12T00:00:00.000Z",
                        "end_date": null,
                        "exception_notes": null,
                        "exception_dates": [],
                        "document_urls": [
                            "https://storage.cloud.google.com/buildify_user_uploads/projectimages/HousePlan04.pdf",
                            "https://storage.cloud.google.com/buildify_user_uploads/projectimages/plan04a.jpeg"
                        ]
                    },
                    "links": {
                        "self": "http://localhostx:3000/api/project/200004"
                    },
                    "relationships": {
                        "home_owner": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200004/relationships/home_owner",
                                "related": "http://localhostx:3000/api/project/200004/home_owner"
                            },
                            "data": {
                                "type": "user",
                                "id": 100004
                            }
                        },
                        "gc_business": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200004/relationships/gc_business",
                                "related": "http://localhostx:3000/api/project/200004/gc_business"
                            },
                            "data": {
                                "type": "business",
                                "id": 101001
                            }
                        },
                        "project_assignments": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200004/relationships/project_assignments",
                                "related": "http://localhostx:3000/api/project/200004/project_assignments"
                            },
                            "data": [
                                {
                                    "type": "project_Assignments",
                                    "id": 300136
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300137
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300167
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300168
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300004
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300027
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300028
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300029
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300030
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300031
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300032
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300033
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300079
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300091
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300107
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300108
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300109
                                }
                            ]
                        },
                        "tasks": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200004/relationships/tasks",
                                "related": "http://localhostx:3000/api/project/200004/tasks"
                            },
                            "data": [
                                {
                                    "type": "task",
                                    "id": 139
                                },
                                {
                                    "type": "task",
                                    "id": 140
                                },
                                {
                                    "type": "task",
                                    "id": 141
                                },
                                {
                                    "type": "task",
                                    "id": 142
                                },
                                {
                                    "type": "task",
                                    "id": 143
                                },
                                {
                                    "type": "task",
                                    "id": 144
                                },
                                {
                                    "type": "task",
                                    "id": 145
                                },
                                {
                                    "type": "task",
                                    "id": 146
                                },
                                {
                                    "type": "task",
                                    "id": 147
                                },
                                {
                                    "type": "task",
                                    "id": 148
                                },
                                {
                                    "type": "task",
                                    "id": 149
                                },
                                {
                                    "type": "task",
                                    "id": 150
                                },
                                {
                                    "type": "task",
                                    "id": 151
                                },
                                {
                                    "type": "task",
                                    "id": 152
                                },
                                {
                                    "type": "task",
                                    "id": 153
                                },
                                {
                                    "type": "task",
                                    "id": 154
                                },
                                {
                                    "type": "task",
                                    "id": 155
                                },
                                {
                                    "type": "task",
                                    "id": 156
                                },
                                {
                                    "type": "task",
                                    "id": 157
                                },
                                {
                                    "type": "task",
                                    "id": 158
                                },
                                {
                                    "type": "task",
                                    "id": 159
                                },
                                {
                                    "type": "task",
                                    "id": 160
                                },
                                {
                                    "type": "task",
                                    "id": 161
                                },
                                {
                                    "type": "task",
                                    "id": 162
                                },
                                {
                                    "type": "task",
                                    "id": 163
                                },
                                {
                                    "type": "task",
                                    "id": 164
                                },
                                {
                                    "type": "task",
                                    "id": 165
                                },
                                {
                                    "type": "task",
                                    "id": 166
                                },
                                {
                                    "type": "task",
                                    "id": 167
                                },
                                {
                                    "type": "task",
                                    "id": 168
                                },
                                {
                                    "type": "task",
                                    "id": 169
                                },
                                {
                                    "type": "task",
                                    "id": 170
                                },
                                {
                                    "type": "task",
                                    "id": 171
                                },
                                {
                                    "type": "task",
                                    "id": 172
                                },
                                {
                                    "type": "task",
                                    "id": 173
                                },
                                {
                                    "type": "task",
                                    "id": 174
                                },
                                {
                                    "type": "task",
                                    "id": 175
                                },
                                {
                                    "type": "task",
                                    "id": 176
                                },
                                {
                                    "type": "task",
                                    "id": 177
                                },
                                {
                                    "type": "task",
                                    "id": 178
                                },
                                {
                                    "type": "task",
                                    "id": 179
                                },
                                {
                                    "type": "task",
                                    "id": 180
                                },
                                {
                                    "type": "task",
                                    "id": 181
                                },
                                {
                                    "type": "task",
                                    "id": 182
                                },
                                {
                                    "type": "task",
                                    "id": 183
                                },
                                {
                                    "type": "task",
                                    "id": 184
                                }
                            ]
                        },
                        "punch_list": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200004/relationships/punch_list",
                                "related": "http://localhostx:3000/api/project/200004/punch_list"
                            },
                            "data": []
                        },
                        "daily_logs": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200004/relationships/daily_logs",
                                "related": "http://localhostx:3000/api/project/200004/daily_logs"
                            },
                            "data": []
                        },
                        "progression_notes": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200004/relationships/progression_notes",
                                "related": "http://localhostx:3000/api/project/200004/progression_notes"
                            },
                            "data": []
                        },
                        "change_orders": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200004/relationships/change_orders",
                                "related": "http://localhostx:3000/api/project/200004/change_orders"
                            },
                            "data": []
                        },
                        "specications": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200004/relationships/specications",
                                "related": "http://localhostx:3000/api/project/200004/specications"
                            },
                            "data": []
                        },
                        "selections": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200004/relationships/selections",
                                "related": "http://localhostx:3000/api/project/200004/selections"
                            },
                            "data": []
                        },
                        "bids": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200004/relationships/bids",
                                "related": "http://localhostx:3000/api/project/200004/bids"
                            },
                            "data": []
                        },
                        "files": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200004/relationships/files",
                                "related": "http://localhostx:3000/api/project/200004/files"
                            },
                            "data": []
                        }
                    }
                },
                {
                    "type": "project",
                    "id": 200005,
                    "attributes": {
                        "created_at": "2024-05-21T17:15:40.842Z",
                        "updated_at": "2024-05-21T17:15:40.842Z",
                        "active": true,
                        "home_owner_id": 100005,
                        "gc_business_id": 101001,
                        "name": "Theegala's home",
                        "description": " New home with 2900 sq footage new home with 4-bedroom, 2.5 bath ranch on a spacious .5-acre lot nestled in a serene cul-de-sac setting",
                        "address1": "403 S Long St",
                        "address2": "",
                        "state": "NC",
                        "zipcode": "28144",
                        "city": "EastSpencer",
                        "status": "not yet started",
                        "project_type": "CustomHome",
                        "contract_type": "fixed",
                        "budget_estimated": "280000",
                        "actual_spent": "110003",
                        "percentage_complete": "28",
                        "notes": "Constructionstarted-4",
                        "start_date": "2024-03-22T00:00:00.000Z",
                        "end_date": null,
                        "exception_notes": null,
                        "exception_dates": [],
                        "document_urls": [
                            "https://storage.cloud.google.com/buildify_user_uploads/projectimages/ranchplan05.png"
                        ]
                    },
                    "links": {
                        "self": "http://localhostx:3000/api/project/200005"
                    },
                    "relationships": {
                        "home_owner": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200005/relationships/home_owner",
                                "related": "http://localhostx:3000/api/project/200005/home_owner"
                            },
                            "data": {
                                "type": "user",
                                "id": 100005
                            }
                        },
                        "gc_business": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200005/relationships/gc_business",
                                "related": "http://localhostx:3000/api/project/200005/gc_business"
                            },
                            "data": {
                                "type": "business",
                                "id": 101001
                            }
                        },
                        "project_assignments": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200005/relationships/project_assignments",
                                "related": "http://localhostx:3000/api/project/200005/project_assignments"
                            },
                            "data": [
                                {
                                    "type": "project_Assignments",
                                    "id": 300138
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300139
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300140
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300169
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300005
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300034
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300035
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300036
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300037
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300038
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300080
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300092
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300110
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300111
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300112
                                }
                            ]
                        },
                        "tasks": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200005/relationships/tasks",
                                "related": "http://localhostx:3000/api/project/200005/tasks"
                            },
                            "data": [
                                {
                                    "type": "task",
                                    "id": 185
                                },
                                {
                                    "type": "task",
                                    "id": 186
                                },
                                {
                                    "type": "task",
                                    "id": 187
                                },
                                {
                                    "type": "task",
                                    "id": 188
                                },
                                {
                                    "type": "task",
                                    "id": 189
                                },
                                {
                                    "type": "task",
                                    "id": 190
                                },
                                {
                                    "type": "task",
                                    "id": 191
                                },
                                {
                                    "type": "task",
                                    "id": 192
                                },
                                {
                                    "type": "task",
                                    "id": 193
                                },
                                {
                                    "type": "task",
                                    "id": 194
                                },
                                {
                                    "type": "task",
                                    "id": 195
                                },
                                {
                                    "type": "task",
                                    "id": 196
                                },
                                {
                                    "type": "task",
                                    "id": 197
                                },
                                {
                                    "type": "task",
                                    "id": 198
                                },
                                {
                                    "type": "task",
                                    "id": 199
                                },
                                {
                                    "type": "task",
                                    "id": 200
                                },
                                {
                                    "type": "task",
                                    "id": 201
                                },
                                {
                                    "type": "task",
                                    "id": 202
                                },
                                {
                                    "type": "task",
                                    "id": 203
                                },
                                {
                                    "type": "task",
                                    "id": 204
                                },
                                {
                                    "type": "task",
                                    "id": 205
                                },
                                {
                                    "type": "task",
                                    "id": 206
                                },
                                {
                                    "type": "task",
                                    "id": 207
                                },
                                {
                                    "type": "task",
                                    "id": 208
                                },
                                {
                                    "type": "task",
                                    "id": 209
                                },
                                {
                                    "type": "task",
                                    "id": 210
                                },
                                {
                                    "type": "task",
                                    "id": 211
                                },
                                {
                                    "type": "task",
                                    "id": 212
                                },
                                {
                                    "type": "task",
                                    "id": 213
                                },
                                {
                                    "type": "task",
                                    "id": 214
                                },
                                {
                                    "type": "task",
                                    "id": 215
                                },
                                {
                                    "type": "task",
                                    "id": 216
                                },
                                {
                                    "type": "task",
                                    "id": 217
                                },
                                {
                                    "type": "task",
                                    "id": 218
                                },
                                {
                                    "type": "task",
                                    "id": 219
                                },
                                {
                                    "type": "task",
                                    "id": 220
                                },
                                {
                                    "type": "task",
                                    "id": 221
                                },
                                {
                                    "type": "task",
                                    "id": 222
                                },
                                {
                                    "type": "task",
                                    "id": 223
                                },
                                {
                                    "type": "task",
                                    "id": 224
                                },
                                {
                                    "type": "task",
                                    "id": 225
                                },
                                {
                                    "type": "task",
                                    "id": 226
                                },
                                {
                                    "type": "task",
                                    "id": 227
                                },
                                {
                                    "type": "task",
                                    "id": 228
                                },
                                {
                                    "type": "task",
                                    "id": 229
                                },
                                {
                                    "type": "task",
                                    "id": 230
                                }
                            ]
                        },
                        "punch_list": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200005/relationships/punch_list",
                                "related": "http://localhostx:3000/api/project/200005/punch_list"
                            },
                            "data": []
                        },
                        "daily_logs": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200005/relationships/daily_logs",
                                "related": "http://localhostx:3000/api/project/200005/daily_logs"
                            },
                            "data": []
                        },
                        "progression_notes": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200005/relationships/progression_notes",
                                "related": "http://localhostx:3000/api/project/200005/progression_notes"
                            },
                            "data": []
                        },
                        "change_orders": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200005/relationships/change_orders",
                                "related": "http://localhostx:3000/api/project/200005/change_orders"
                            },
                            "data": []
                        },
                        "specications": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200005/relationships/specications",
                                "related": "http://localhostx:3000/api/project/200005/specications"
                            },
                            "data": []
                        },
                        "selections": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200005/relationships/selections",
                                "related": "http://localhostx:3000/api/project/200005/selections"
                            },
                            "data": []
                        },
                        "bids": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200005/relationships/bids",
                                "related": "http://localhostx:3000/api/project/200005/bids"
                            },
                            "data": []
                        },
                        "files": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200005/relationships/files",
                                "related": "http://localhostx:3000/api/project/200005/files"
                            },
                            "data": []
                        }
                    }
                },
                {
                    "type": "project",
                    "id": 200006,
                    "attributes": {
                        "created_at": "2024-05-21T17:15:41.056Z",
                        "updated_at": "2024-05-21T17:15:41.056Z",
                        "active": true,
                        "home_owner_id": 100006,
                        "gc_business_id": 101001,
                        "name": "Schauffele's home",
                        "description": "New home with 3 beds, 3 baths new home on 0.40 acre lot with 2279 square footage",
                        "address1": "15258 Hus McGinnis Rd",
                        "address2": "",
                        "state": "NC",
                        "zipcode": "28078",
                        "city": "Huntersville",
                        "status": "in progress",
                        "project_type": "CustomHome",
                        "contract_type": "ubuildit",
                        "budget_estimated": "300000",
                        "actual_spent": "150004",
                        "percentage_complete": "58",
                        "notes": "Constructionstarted-5",
                        "start_date": "2023-11-22T00:00:00.000Z",
                        "end_date": null,
                        "exception_notes": null,
                        "exception_dates": [],
                        "document_urls": [
                            "https://storage.cloud.google.com/buildify_user_uploads/projectimages/ranchplan05.png"
                        ]
                    },
                    "links": {
                        "self": "http://localhostx:3000/api/project/200006"
                    },
                    "relationships": {
                        "home_owner": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200006/relationships/home_owner",
                                "related": "http://localhostx:3000/api/project/200006/home_owner"
                            },
                            "data": {
                                "type": "user",
                                "id": 100006
                            }
                        },
                        "gc_business": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200006/relationships/gc_business",
                                "related": "http://localhostx:3000/api/project/200006/gc_business"
                            },
                            "data": {
                                "type": "business",
                                "id": 101001
                            }
                        },
                        "project_assignments": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200006/relationships/project_assignments",
                                "related": "http://localhostx:3000/api/project/200006/project_assignments"
                            },
                            "data": [
                                {
                                    "type": "project_Assignments",
                                    "id": 300141
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300142
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300006
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300039
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300040
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300081
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300093
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300113
                                }
                            ]
                        },
                        "tasks": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200006/relationships/tasks",
                                "related": "http://localhostx:3000/api/project/200006/tasks"
                            },
                            "data": [
                                {
                                    "type": "task",
                                    "id": 231
                                },
                                {
                                    "type": "task",
                                    "id": 232
                                },
                                {
                                    "type": "task",
                                    "id": 233
                                },
                                {
                                    "type": "task",
                                    "id": 234
                                },
                                {
                                    "type": "task",
                                    "id": 235
                                },
                                {
                                    "type": "task",
                                    "id": 236
                                },
                                {
                                    "type": "task",
                                    "id": 237
                                },
                                {
                                    "type": "task",
                                    "id": 238
                                },
                                {
                                    "type": "task",
                                    "id": 239
                                },
                                {
                                    "type": "task",
                                    "id": 240
                                },
                                {
                                    "type": "task",
                                    "id": 241
                                },
                                {
                                    "type": "task",
                                    "id": 242
                                },
                                {
                                    "type": "task",
                                    "id": 243
                                },
                                {
                                    "type": "task",
                                    "id": 244
                                },
                                {
                                    "type": "task",
                                    "id": 245
                                },
                                {
                                    "type": "task",
                                    "id": 246
                                },
                                {
                                    "type": "task",
                                    "id": 247
                                },
                                {
                                    "type": "task",
                                    "id": 248
                                },
                                {
                                    "type": "task",
                                    "id": 249
                                },
                                {
                                    "type": "task",
                                    "id": 250
                                },
                                {
                                    "type": "task",
                                    "id": 251
                                },
                                {
                                    "type": "task",
                                    "id": 252
                                },
                                {
                                    "type": "task",
                                    "id": 253
                                },
                                {
                                    "type": "task",
                                    "id": 254
                                },
                                {
                                    "type": "task",
                                    "id": 255
                                },
                                {
                                    "type": "task",
                                    "id": 256
                                },
                                {
                                    "type": "task",
                                    "id": 257
                                },
                                {
                                    "type": "task",
                                    "id": 258
                                },
                                {
                                    "type": "task",
                                    "id": 259
                                },
                                {
                                    "type": "task",
                                    "id": 260
                                },
                                {
                                    "type": "task",
                                    "id": 261
                                },
                                {
                                    "type": "task",
                                    "id": 262
                                },
                                {
                                    "type": "task",
                                    "id": 263
                                },
                                {
                                    "type": "task",
                                    "id": 264
                                },
                                {
                                    "type": "task",
                                    "id": 265
                                },
                                {
                                    "type": "task",
                                    "id": 266
                                },
                                {
                                    "type": "task",
                                    "id": 267
                                },
                                {
                                    "type": "task",
                                    "id": 268
                                },
                                {
                                    "type": "task",
                                    "id": 269
                                },
                                {
                                    "type": "task",
                                    "id": 270
                                },
                                {
                                    "type": "task",
                                    "id": 271
                                },
                                {
                                    "type": "task",
                                    "id": 272
                                },
                                {
                                    "type": "task",
                                    "id": 273
                                },
                                {
                                    "type": "task",
                                    "id": 274
                                },
                                {
                                    "type": "task",
                                    "id": 275
                                },
                                {
                                    "type": "task",
                                    "id": 276
                                }
                            ]
                        },
                        "punch_list": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200006/relationships/punch_list",
                                "related": "http://localhostx:3000/api/project/200006/punch_list"
                            },
                            "data": []
                        },
                        "daily_logs": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200006/relationships/daily_logs",
                                "related": "http://localhostx:3000/api/project/200006/daily_logs"
                            },
                            "data": []
                        },
                        "progression_notes": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200006/relationships/progression_notes",
                                "related": "http://localhostx:3000/api/project/200006/progression_notes"
                            },
                            "data": []
                        },
                        "change_orders": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200006/relationships/change_orders",
                                "related": "http://localhostx:3000/api/project/200006/change_orders"
                            },
                            "data": []
                        },
                        "specications": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200006/relationships/specications",
                                "related": "http://localhostx:3000/api/project/200006/specications"
                            },
                            "data": []
                        },
                        "selections": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200006/relationships/selections",
                                "related": "http://localhostx:3000/api/project/200006/selections"
                            },
                            "data": []
                        },
                        "bids": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200006/relationships/bids",
                                "related": "http://localhostx:3000/api/project/200006/bids"
                            },
                            "data": []
                        },
                        "files": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200006/relationships/files",
                                "related": "http://localhostx:3000/api/project/200006/files"
                            },
                            "data": []
                        }
                    }
                },
                {
                    "type": "project",
                    "id": 200007,
                    "attributes": {
                        "created_at": "2024-05-21T17:15:41.280Z",
                        "updated_at": "2024-05-21T17:15:41.280Z",
                        "active": true,
                        "home_owner_id": 100007,
                        "gc_business_id": 101002,
                        "name": "Scheffler's home",
                        "description": "New Custom home with 3200 sq footage spacious home incl Kit w/large eat-in area & seating at Island. Primary BR on main has new carpet, 2 walk-in closets & adjoining office but could be used as playroom, flex space. Primary BA has walk-in shower, tub, & 2 vanities.",
                        "address1": "1420 E35th St",
                        "address2": "",
                        "state": "NC",
                        "zipcode": "28205",
                        "city": "Charlotte",
                        "status": "in progress",
                        "project_type": "Remodel",
                        "contract_type": "costplus",
                        "budget_estimated": "320000",
                        "actual_spent": "160005",
                        "percentage_complete": "55",
                        "notes": "Constructionstarted-6",
                        "start_date": "2023-11-12T00:00:00.000Z",
                        "end_date": null,
                        "exception_notes": null,
                        "exception_dates": [],
                        "document_urls": [
                            "https://storage.cloud.google.com/buildify_user_uploads/projectimages/plan07.pdf",
                            "https://storage.cloud.google.com/buildify_user_uploads/projectimages/plan07a.jpeg"
                        ]
                    },
                    "links": {
                        "self": "http://localhostx:3000/api/project/200007"
                    },
                    "relationships": {
                        "home_owner": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200007/relationships/home_owner",
                                "related": "http://localhostx:3000/api/project/200007/home_owner"
                            },
                            "data": {
                                "type": "user",
                                "id": 100007
                            }
                        },
                        "gc_business": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200007/relationships/gc_business",
                                "related": "http://localhostx:3000/api/project/200007/gc_business"
                            },
                            "data": {
                                "type": "business",
                                "id": 101002
                            }
                        },
                        "project_assignments": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200007/relationships/project_assignments",
                                "related": "http://localhostx:3000/api/project/200007/project_assignments"
                            },
                            "data": [
                                {
                                    "type": "project_Assignments",
                                    "id": 300143
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300144
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300145
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300007
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300041
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300042
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300043
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300044
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300045
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300046
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300047
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300082
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300094
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300114
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300115
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300116
                                }
                            ]
                        },
                        "tasks": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200007/relationships/tasks",
                                "related": "http://localhostx:3000/api/project/200007/tasks"
                            },
                            "data": [
                                {
                                    "type": "task",
                                    "id": 277
                                },
                                {
                                    "type": "task",
                                    "id": 278
                                },
                                {
                                    "type": "task",
                                    "id": 279
                                },
                                {
                                    "type": "task",
                                    "id": 280
                                },
                                {
                                    "type": "task",
                                    "id": 281
                                },
                                {
                                    "type": "task",
                                    "id": 282
                                },
                                {
                                    "type": "task",
                                    "id": 283
                                },
                                {
                                    "type": "task",
                                    "id": 284
                                },
                                {
                                    "type": "task",
                                    "id": 285
                                },
                                {
                                    "type": "task",
                                    "id": 286
                                },
                                {
                                    "type": "task",
                                    "id": 287
                                },
                                {
                                    "type": "task",
                                    "id": 288
                                },
                                {
                                    "type": "task",
                                    "id": 289
                                },
                                {
                                    "type": "task",
                                    "id": 290
                                },
                                {
                                    "type": "task",
                                    "id": 291
                                },
                                {
                                    "type": "task",
                                    "id": 292
                                },
                                {
                                    "type": "task",
                                    "id": 293
                                },
                                {
                                    "type": "task",
                                    "id": 294
                                },
                                {
                                    "type": "task",
                                    "id": 295
                                },
                                {
                                    "type": "task",
                                    "id": 296
                                },
                                {
                                    "type": "task",
                                    "id": 297
                                },
                                {
                                    "type": "task",
                                    "id": 298
                                },
                                {
                                    "type": "task",
                                    "id": 299
                                },
                                {
                                    "type": "task",
                                    "id": 300
                                },
                                {
                                    "type": "task",
                                    "id": 301
                                },
                                {
                                    "type": "task",
                                    "id": 302
                                },
                                {
                                    "type": "task",
                                    "id": 303
                                },
                                {
                                    "type": "task",
                                    "id": 304
                                },
                                {
                                    "type": "task",
                                    "id": 305
                                },
                                {
                                    "type": "task",
                                    "id": 306
                                },
                                {
                                    "type": "task",
                                    "id": 307
                                },
                                {
                                    "type": "task",
                                    "id": 308
                                },
                                {
                                    "type": "task",
                                    "id": 309
                                },
                                {
                                    "type": "task",
                                    "id": 310
                                },
                                {
                                    "type": "task",
                                    "id": 311
                                },
                                {
                                    "type": "task",
                                    "id": 312
                                },
                                {
                                    "type": "task",
                                    "id": 313
                                },
                                {
                                    "type": "task",
                                    "id": 314
                                },
                                {
                                    "type": "task",
                                    "id": 315
                                },
                                {
                                    "type": "task",
                                    "id": 316
                                },
                                {
                                    "type": "task",
                                    "id": 317
                                },
                                {
                                    "type": "task",
                                    "id": 318
                                },
                                {
                                    "type": "task",
                                    "id": 319
                                },
                                {
                                    "type": "task",
                                    "id": 320
                                },
                                {
                                    "type": "task",
                                    "id": 321
                                },
                                {
                                    "type": "task",
                                    "id": 322
                                }
                            ]
                        },
                        "punch_list": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200007/relationships/punch_list",
                                "related": "http://localhostx:3000/api/project/200007/punch_list"
                            },
                            "data": []
                        },
                        "daily_logs": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200007/relationships/daily_logs",
                                "related": "http://localhostx:3000/api/project/200007/daily_logs"
                            },
                            "data": []
                        },
                        "progression_notes": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200007/relationships/progression_notes",
                                "related": "http://localhostx:3000/api/project/200007/progression_notes"
                            },
                            "data": []
                        },
                        "change_orders": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200007/relationships/change_orders",
                                "related": "http://localhostx:3000/api/project/200007/change_orders"
                            },
                            "data": []
                        },
                        "specications": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200007/relationships/specications",
                                "related": "http://localhostx:3000/api/project/200007/specications"
                            },
                            "data": []
                        },
                        "selections": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200007/relationships/selections",
                                "related": "http://localhostx:3000/api/project/200007/selections"
                            },
                            "data": []
                        },
                        "bids": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200007/relationships/bids",
                                "related": "http://localhostx:3000/api/project/200007/bids"
                            },
                            "data": []
                        },
                        "files": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200007/relationships/files",
                                "related": "http://localhostx:3000/api/project/200007/files"
                            },
                            "data": []
                        }
                    }
                },
                {
                    "type": "project",
                    "id": 200008,
                    "attributes": {
                        "created_at": "2024-05-21T17:15:41.628Z",
                        "updated_at": "2024-05-21T17:15:41.628Z",
                        "active": true,
                        "home_owner_id": 100008,
                        "gc_business_id": 101002,
                        "name": "Rose's home",
                        "description": "New Home with 1829 sq footage hone with 3-bed, 2-bath featuring a grand entrance showcasing the spacious great room with vaulted ceiling, stone fireplace, and wet bar perfect for entertaining",
                        "address1": "3404 Campbell Dr",
                        "address2": "",
                        "state": "NC",
                        "zipcode": "28205",
                        "city": "Charlotte",
                        "status": "in progress",
                        "project_type": "CustomHome",
                        "contract_type": "fixed",
                        "budget_estimated": "340000",
                        "actual_spent": "195000",
                        "percentage_complete": "60",
                        "notes": "Constructionstarted-7",
                        "start_date": "2023-10-03T00:00:00.000Z",
                        "end_date": null,
                        "exception_notes": null,
                        "exception_dates": [],
                        "document_urls": [
                            "https://storage.cloud.google.com/buildify_user_uploads/projectimages/plan08.jpeg"
                        ]
                    },
                    "links": {
                        "self": "http://localhostx:3000/api/project/200008"
                    },
                    "relationships": {
                        "home_owner": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200008/relationships/home_owner",
                                "related": "http://localhostx:3000/api/project/200008/home_owner"
                            },
                            "data": {
                                "type": "user",
                                "id": 100008
                            }
                        },
                        "gc_business": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200008/relationships/gc_business",
                                "related": "http://localhostx:3000/api/project/200008/gc_business"
                            },
                            "data": {
                                "type": "business",
                                "id": 101002
                            }
                        },
                        "project_assignments": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200008/relationships/project_assignments",
                                "related": "http://localhostx:3000/api/project/200008/project_assignments"
                            },
                            "data": [
                                {
                                    "type": "project_Assignments",
                                    "id": 300118
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300119
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300146
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300147
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300008
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300048
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300049
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300050
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300051
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300052
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300053
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300054
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300083
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300095
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300117
                                }
                            ]
                        },
                        "tasks": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200008/relationships/tasks",
                                "related": "http://localhostx:3000/api/project/200008/tasks"
                            },
                            "data": [
                                {
                                    "type": "task",
                                    "id": 323
                                },
                                {
                                    "type": "task",
                                    "id": 324
                                },
                                {
                                    "type": "task",
                                    "id": 325
                                },
                                {
                                    "type": "task",
                                    "id": 326
                                },
                                {
                                    "type": "task",
                                    "id": 327
                                },
                                {
                                    "type": "task",
                                    "id": 328
                                },
                                {
                                    "type": "task",
                                    "id": 329
                                },
                                {
                                    "type": "task",
                                    "id": 330
                                },
                                {
                                    "type": "task",
                                    "id": 331
                                },
                                {
                                    "type": "task",
                                    "id": 332
                                },
                                {
                                    "type": "task",
                                    "id": 333
                                },
                                {
                                    "type": "task",
                                    "id": 334
                                },
                                {
                                    "type": "task",
                                    "id": 335
                                },
                                {
                                    "type": "task",
                                    "id": 336
                                },
                                {
                                    "type": "task",
                                    "id": 337
                                },
                                {
                                    "type": "task",
                                    "id": 338
                                },
                                {
                                    "type": "task",
                                    "id": 339
                                },
                                {
                                    "type": "task",
                                    "id": 340
                                },
                                {
                                    "type": "task",
                                    "id": 341
                                },
                                {
                                    "type": "task",
                                    "id": 342
                                },
                                {
                                    "type": "task",
                                    "id": 343
                                },
                                {
                                    "type": "task",
                                    "id": 344
                                },
                                {
                                    "type": "task",
                                    "id": 345
                                },
                                {
                                    "type": "task",
                                    "id": 346
                                },
                                {
                                    "type": "task",
                                    "id": 347
                                },
                                {
                                    "type": "task",
                                    "id": 348
                                },
                                {
                                    "type": "task",
                                    "id": 349
                                },
                                {
                                    "type": "task",
                                    "id": 350
                                },
                                {
                                    "type": "task",
                                    "id": 351
                                },
                                {
                                    "type": "task",
                                    "id": 352
                                },
                                {
                                    "type": "task",
                                    "id": 353
                                },
                                {
                                    "type": "task",
                                    "id": 354
                                },
                                {
                                    "type": "task",
                                    "id": 355
                                },
                                {
                                    "type": "task",
                                    "id": 356
                                },
                                {
                                    "type": "task",
                                    "id": 357
                                },
                                {
                                    "type": "task",
                                    "id": 358
                                },
                                {
                                    "type": "task",
                                    "id": 359
                                },
                                {
                                    "type": "task",
                                    "id": 360
                                },
                                {
                                    "type": "task",
                                    "id": 361
                                },
                                {
                                    "type": "task",
                                    "id": 362
                                },
                                {
                                    "type": "task",
                                    "id": 363
                                },
                                {
                                    "type": "task",
                                    "id": 364
                                },
                                {
                                    "type": "task",
                                    "id": 365
                                },
                                {
                                    "type": "task",
                                    "id": 366
                                },
                                {
                                    "type": "task",
                                    "id": 367
                                },
                                {
                                    "type": "task",
                                    "id": 368
                                }
                            ]
                        },
                        "punch_list": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200008/relationships/punch_list",
                                "related": "http://localhostx:3000/api/project/200008/punch_list"
                            },
                            "data": []
                        },
                        "daily_logs": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200008/relationships/daily_logs",
                                "related": "http://localhostx:3000/api/project/200008/daily_logs"
                            },
                            "data": []
                        },
                        "progression_notes": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200008/relationships/progression_notes",
                                "related": "http://localhostx:3000/api/project/200008/progression_notes"
                            },
                            "data": []
                        },
                        "change_orders": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200008/relationships/change_orders",
                                "related": "http://localhostx:3000/api/project/200008/change_orders"
                            },
                            "data": []
                        },
                        "specications": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200008/relationships/specications",
                                "related": "http://localhostx:3000/api/project/200008/specications"
                            },
                            "data": []
                        },
                        "selections": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200008/relationships/selections",
                                "related": "http://localhostx:3000/api/project/200008/selections"
                            },
                            "data": []
                        },
                        "bids": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200008/relationships/bids",
                                "related": "http://localhostx:3000/api/project/200008/bids"
                            },
                            "data": []
                        },
                        "files": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200008/relationships/files",
                                "related": "http://localhostx:3000/api/project/200008/files"
                            },
                            "data": []
                        }
                    }
                },
                {
                    "type": "project",
                    "id": 200009,
                    "attributes": {
                        "created_at": "2024-05-21T17:15:41.871Z",
                        "updated_at": "2024-05-21T17:15:41.871Z",
                        "active": true,
                        "home_owner_id": 100009,
                        "gc_business_id": 101002,
                        "name": "Koepka's first home",
                        "description": "New Home with 2785 sq footage two-story home featuring 5 bedrooms and 2.5 baths on a .25 acre lot",
                        "address1": "1316 Goodwin Ave",
                        "address2": "",
                        "state": "NC",
                        "zipcode": "28205",
                        "city": "Charlotte",
                        "status": "in progress",
                        "project_type": "CustomHome",
                        "contract_type": "fixed",
                        "budget_estimated": "360000",
                        "actual_spent": "280006",
                        "percentage_complete": "80",
                        "notes": "Constructionstarted-8",
                        "start_date": "2023-08-18T00:00:00.000Z",
                        "end_date": null,
                        "exception_notes": null,
                        "exception_dates": [],
                        "document_urls": [
                            "https://storage.cloud.google.com/buildify_user_uploads/projectimages/plan09.jpeg"
                        ]
                    },
                    "links": {
                        "self": "http://localhostx:3000/api/project/200009"
                    },
                    "relationships": {
                        "home_owner": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200009/relationships/home_owner",
                                "related": "http://localhostx:3000/api/project/200009/home_owner"
                            },
                            "data": {
                                "type": "user",
                                "id": 100009
                            }
                        },
                        "gc_business": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200009/relationships/gc_business",
                                "related": "http://localhostx:3000/api/project/200009/gc_business"
                            },
                            "data": {
                                "type": "business",
                                "id": 101002
                            }
                        },
                        "project_assignments": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200009/relationships/project_assignments",
                                "related": "http://localhostx:3000/api/project/200009/project_assignments"
                            },
                            "data": [
                                {
                                    "type": "project_Assignments",
                                    "id": 300120
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300148
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300149
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300150
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300009
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300055
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300056
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300057
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300058
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300059
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300084
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300096
                                }
                            ]
                        },
                        "tasks": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200009/relationships/tasks",
                                "related": "http://localhostx:3000/api/project/200009/tasks"
                            },
                            "data": [
                                {
                                    "type": "task",
                                    "id": 369
                                },
                                {
                                    "type": "task",
                                    "id": 370
                                },
                                {
                                    "type": "task",
                                    "id": 371
                                },
                                {
                                    "type": "task",
                                    "id": 372
                                },
                                {
                                    "type": "task",
                                    "id": 373
                                },
                                {
                                    "type": "task",
                                    "id": 374
                                },
                                {
                                    "type": "task",
                                    "id": 375
                                },
                                {
                                    "type": "task",
                                    "id": 376
                                },
                                {
                                    "type": "task",
                                    "id": 377
                                },
                                {
                                    "type": "task",
                                    "id": 378
                                },
                                {
                                    "type": "task",
                                    "id": 379
                                },
                                {
                                    "type": "task",
                                    "id": 380
                                },
                                {
                                    "type": "task",
                                    "id": 381
                                },
                                {
                                    "type": "task",
                                    "id": 382
                                },
                                {
                                    "type": "task",
                                    "id": 383
                                },
                                {
                                    "type": "task",
                                    "id": 384
                                },
                                {
                                    "type": "task",
                                    "id": 385
                                },
                                {
                                    "type": "task",
                                    "id": 386
                                },
                                {
                                    "type": "task",
                                    "id": 387
                                },
                                {
                                    "type": "task",
                                    "id": 388
                                },
                                {
                                    "type": "task",
                                    "id": 389
                                },
                                {
                                    "type": "task",
                                    "id": 390
                                },
                                {
                                    "type": "task",
                                    "id": 391
                                },
                                {
                                    "type": "task",
                                    "id": 392
                                },
                                {
                                    "type": "task",
                                    "id": 393
                                },
                                {
                                    "type": "task",
                                    "id": 394
                                },
                                {
                                    "type": "task",
                                    "id": 395
                                },
                                {
                                    "type": "task",
                                    "id": 396
                                },
                                {
                                    "type": "task",
                                    "id": 397
                                },
                                {
                                    "type": "task",
                                    "id": 398
                                },
                                {
                                    "type": "task",
                                    "id": 399
                                },
                                {
                                    "type": "task",
                                    "id": 400
                                },
                                {
                                    "type": "task",
                                    "id": 401
                                },
                                {
                                    "type": "task",
                                    "id": 402
                                },
                                {
                                    "type": "task",
                                    "id": 403
                                },
                                {
                                    "type": "task",
                                    "id": 404
                                },
                                {
                                    "type": "task",
                                    "id": 405
                                },
                                {
                                    "type": "task",
                                    "id": 406
                                },
                                {
                                    "type": "task",
                                    "id": 407
                                },
                                {
                                    "type": "task",
                                    "id": 408
                                },
                                {
                                    "type": "task",
                                    "id": 409
                                },
                                {
                                    "type": "task",
                                    "id": 410
                                },
                                {
                                    "type": "task",
                                    "id": 411
                                },
                                {
                                    "type": "task",
                                    "id": 412
                                },
                                {
                                    "type": "task",
                                    "id": 413
                                },
                                {
                                    "type": "task",
                                    "id": 414
                                }
                            ]
                        },
                        "punch_list": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200009/relationships/punch_list",
                                "related": "http://localhostx:3000/api/project/200009/punch_list"
                            },
                            "data": []
                        },
                        "daily_logs": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200009/relationships/daily_logs",
                                "related": "http://localhostx:3000/api/project/200009/daily_logs"
                            },
                            "data": []
                        },
                        "progression_notes": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200009/relationships/progression_notes",
                                "related": "http://localhostx:3000/api/project/200009/progression_notes"
                            },
                            "data": []
                        },
                        "change_orders": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200009/relationships/change_orders",
                                "related": "http://localhostx:3000/api/project/200009/change_orders"
                            },
                            "data": []
                        },
                        "specications": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200009/relationships/specications",
                                "related": "http://localhostx:3000/api/project/200009/specications"
                            },
                            "data": []
                        },
                        "selections": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200009/relationships/selections",
                                "related": "http://localhostx:3000/api/project/200009/selections"
                            },
                            "data": []
                        },
                        "bids": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200009/relationships/bids",
                                "related": "http://localhostx:3000/api/project/200009/bids"
                            },
                            "data": []
                        },
                        "files": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200009/relationships/files",
                                "related": "http://localhostx:3000/api/project/200009/files"
                            },
                            "data": []
                        }
                    }
                },
                {
                    "type": "project",
                    "id": 200010,
                    "attributes": {
                        "created_at": "2024-05-21T17:15:42.077Z",
                        "updated_at": "2024-05-21T17:15:42.077Z",
                        "active": true,
                        "home_owner_id": 100010,
                        "gc_business_id": 101003,
                        "name": "Thomas's home",
                        "description": "New home with 1597 sq footage featuring kitchen, open floor plan, large family room with fireplace and hardwood floors throughout the main level. Upstairs features 3 bedrooms, including spacious master suite and second full bathroom!",
                        "address1": "8911 Summer Club Rd",
                        "address2": "",
                        "state": "NC",
                        "zipcode": "28277",
                        "city": "Charlotte",
                        "status": "in progress",
                        "project_type": "Remodel",
                        "contract_type": "ubuildit",
                        "budget_estimated": "380000",
                        "actual_spent": "80007",
                        "percentage_complete": "20",
                        "notes": "Constructionstarted-9",
                        "start_date": "2024-03-13T00:00:00.000Z",
                        "end_date": null,
                        "exception_notes": null,
                        "exception_dates": [],
                        "document_urls": [
                            "https://storage.cloud.google.com/buildify_user_uploads/projectimages/plan10.jpeg"
                        ]
                    },
                    "links": {
                        "self": "http://localhostx:3000/api/project/200010"
                    },
                    "relationships": {
                        "home_owner": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200010/relationships/home_owner",
                                "related": "http://localhostx:3000/api/project/200010/home_owner"
                            },
                            "data": {
                                "type": "user",
                                "id": 100010
                            }
                        },
                        "gc_business": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200010/relationships/gc_business",
                                "related": "http://localhostx:3000/api/project/200010/gc_business"
                            },
                            "data": {
                                "type": "business",
                                "id": 101003
                            }
                        },
                        "project_assignments": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200010/relationships/project_assignments",
                                "related": "http://localhostx:3000/api/project/200010/project_assignments"
                            },
                            "data": [
                                {
                                    "type": "project_Assignments",
                                    "id": 300121
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300122
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300123
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300151
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300152
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300010
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300060
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300061
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300085
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300097
                                }
                            ]
                        },
                        "tasks": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200010/relationships/tasks",
                                "related": "http://localhostx:3000/api/project/200010/tasks"
                            },
                            "data": [
                                {
                                    "type": "task",
                                    "id": 415
                                },
                                {
                                    "type": "task",
                                    "id": 416
                                },
                                {
                                    "type": "task",
                                    "id": 417
                                },
                                {
                                    "type": "task",
                                    "id": 418
                                },
                                {
                                    "type": "task",
                                    "id": 419
                                },
                                {
                                    "type": "task",
                                    "id": 420
                                },
                                {
                                    "type": "task",
                                    "id": 421
                                },
                                {
                                    "type": "task",
                                    "id": 422
                                },
                                {
                                    "type": "task",
                                    "id": 423
                                },
                                {
                                    "type": "task",
                                    "id": 424
                                },
                                {
                                    "type": "task",
                                    "id": 425
                                },
                                {
                                    "type": "task",
                                    "id": 426
                                },
                                {
                                    "type": "task",
                                    "id": 427
                                },
                                {
                                    "type": "task",
                                    "id": 428
                                },
                                {
                                    "type": "task",
                                    "id": 429
                                },
                                {
                                    "type": "task",
                                    "id": 430
                                },
                                {
                                    "type": "task",
                                    "id": 431
                                },
                                {
                                    "type": "task",
                                    "id": 432
                                },
                                {
                                    "type": "task",
                                    "id": 433
                                },
                                {
                                    "type": "task",
                                    "id": 434
                                },
                                {
                                    "type": "task",
                                    "id": 435
                                },
                                {
                                    "type": "task",
                                    "id": 436
                                },
                                {
                                    "type": "task",
                                    "id": 437
                                },
                                {
                                    "type": "task",
                                    "id": 438
                                },
                                {
                                    "type": "task",
                                    "id": 439
                                },
                                {
                                    "type": "task",
                                    "id": 440
                                },
                                {
                                    "type": "task",
                                    "id": 441
                                },
                                {
                                    "type": "task",
                                    "id": 442
                                },
                                {
                                    "type": "task",
                                    "id": 443
                                },
                                {
                                    "type": "task",
                                    "id": 444
                                },
                                {
                                    "type": "task",
                                    "id": 445
                                },
                                {
                                    "type": "task",
                                    "id": 446
                                },
                                {
                                    "type": "task",
                                    "id": 447
                                },
                                {
                                    "type": "task",
                                    "id": 448
                                },
                                {
                                    "type": "task",
                                    "id": 449
                                },
                                {
                                    "type": "task",
                                    "id": 450
                                },
                                {
                                    "type": "task",
                                    "id": 451
                                },
                                {
                                    "type": "task",
                                    "id": 452
                                },
                                {
                                    "type": "task",
                                    "id": 453
                                },
                                {
                                    "type": "task",
                                    "id": 454
                                },
                                {
                                    "type": "task",
                                    "id": 455
                                },
                                {
                                    "type": "task",
                                    "id": 456
                                },
                                {
                                    "type": "task",
                                    "id": 457
                                },
                                {
                                    "type": "task",
                                    "id": 458
                                },
                                {
                                    "type": "task",
                                    "id": 459
                                },
                                {
                                    "type": "task",
                                    "id": 460
                                }
                            ]
                        },
                        "punch_list": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200010/relationships/punch_list",
                                "related": "http://localhostx:3000/api/project/200010/punch_list"
                            },
                            "data": []
                        },
                        "daily_logs": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200010/relationships/daily_logs",
                                "related": "http://localhostx:3000/api/project/200010/daily_logs"
                            },
                            "data": []
                        },
                        "progression_notes": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200010/relationships/progression_notes",
                                "related": "http://localhostx:3000/api/project/200010/progression_notes"
                            },
                            "data": []
                        },
                        "change_orders": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200010/relationships/change_orders",
                                "related": "http://localhostx:3000/api/project/200010/change_orders"
                            },
                            "data": []
                        },
                        "specications": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200010/relationships/specications",
                                "related": "http://localhostx:3000/api/project/200010/specications"
                            },
                            "data": []
                        },
                        "selections": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200010/relationships/selections",
                                "related": "http://localhostx:3000/api/project/200010/selections"
                            },
                            "data": []
                        },
                        "bids": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200010/relationships/bids",
                                "related": "http://localhostx:3000/api/project/200010/bids"
                            },
                            "data": []
                        },
                        "files": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200010/relationships/files",
                                "related": "http://localhostx:3000/api/project/200010/files"
                            },
                            "data": []
                        }
                    }
                },
                {
                    "type": "project",
                    "id": 200011,
                    "attributes": {
                        "created_at": "2024-05-21T17:15:42.279Z",
                        "updated_at": "2024-05-21T17:15:42.279Z",
                        "active": true,
                        "home_owner_id": 100007,
                        "gc_business_id": 101003,
                        "name": "Scheffler's home",
                        "description": "New home with 2972 sq footage consisting of 4-bedroom, 2.5-bath, kitchen with an island, granite countertops, stainless steel appliances, and a backsplash. Energy-efficient windows (2018), a 5.6 kWh solar panel system, and an electric vehicle charger ensure sustainability and savings.",
                        "address1": "205 Belle Meade Ct",
                        "address2": "",
                        "state": "NC",
                        "zipcode": "28173",
                        "city": "Waxhaw",
                        "status": "in progress",
                        "project_type": "CustomHome",
                        "contract_type": "costplus",
                        "budget_estimated": "400000",
                        "actual_spent": "200008",
                        "percentage_complete": "40",
                        "notes": "Constructionstarted-10",
                        "start_date": "2024-01-24T00:00:00.000Z",
                        "end_date": null,
                        "exception_notes": null,
                        "exception_dates": [],
                        "document_urls": [
                            "https://storage.cloud.google.com/buildify_user_uploads/projectimages/plan11.jpeg"
                        ]
                    },
                    "links": {
                        "self": "http://localhostx:3000/api/project/200011"
                    },
                    "relationships": {
                        "home_owner": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200011/relationships/home_owner",
                                "related": "http://localhostx:3000/api/project/200011/home_owner"
                            },
                            "data": {
                                "type": "user",
                                "id": 100007
                            }
                        },
                        "gc_business": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200011/relationships/gc_business",
                                "related": "http://localhostx:3000/api/project/200011/gc_business"
                            },
                            "data": {
                                "type": "business",
                                "id": 101003
                            }
                        },
                        "project_assignments": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200011/relationships/project_assignments",
                                "related": "http://localhostx:3000/api/project/200011/project_assignments"
                            },
                            "data": [
                                {
                                    "type": "project_Assignments",
                                    "id": 300124
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300125
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300126
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300153
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300154
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300155
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300011
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300062
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300063
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300064
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300065
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300066
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300067
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300068
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300086
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300098
                                }
                            ]
                        },
                        "tasks": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200011/relationships/tasks",
                                "related": "http://localhostx:3000/api/project/200011/tasks"
                            },
                            "data": [
                                {
                                    "type": "task",
                                    "id": 461
                                },
                                {
                                    "type": "task",
                                    "id": 462
                                },
                                {
                                    "type": "task",
                                    "id": 463
                                },
                                {
                                    "type": "task",
                                    "id": 464
                                },
                                {
                                    "type": "task",
                                    "id": 465
                                },
                                {
                                    "type": "task",
                                    "id": 466
                                },
                                {
                                    "type": "task",
                                    "id": 467
                                },
                                {
                                    "type": "task",
                                    "id": 468
                                },
                                {
                                    "type": "task",
                                    "id": 469
                                },
                                {
                                    "type": "task",
                                    "id": 470
                                },
                                {
                                    "type": "task",
                                    "id": 471
                                },
                                {
                                    "type": "task",
                                    "id": 472
                                },
                                {
                                    "type": "task",
                                    "id": 473
                                },
                                {
                                    "type": "task",
                                    "id": 474
                                },
                                {
                                    "type": "task",
                                    "id": 475
                                },
                                {
                                    "type": "task",
                                    "id": 476
                                },
                                {
                                    "type": "task",
                                    "id": 477
                                },
                                {
                                    "type": "task",
                                    "id": 478
                                },
                                {
                                    "type": "task",
                                    "id": 479
                                },
                                {
                                    "type": "task",
                                    "id": 480
                                },
                                {
                                    "type": "task",
                                    "id": 481
                                },
                                {
                                    "type": "task",
                                    "id": 482
                                },
                                {
                                    "type": "task",
                                    "id": 483
                                },
                                {
                                    "type": "task",
                                    "id": 484
                                },
                                {
                                    "type": "task",
                                    "id": 485
                                },
                                {
                                    "type": "task",
                                    "id": 486
                                },
                                {
                                    "type": "task",
                                    "id": 487
                                },
                                {
                                    "type": "task",
                                    "id": 488
                                },
                                {
                                    "type": "task",
                                    "id": 489
                                },
                                {
                                    "type": "task",
                                    "id": 490
                                },
                                {
                                    "type": "task",
                                    "id": 491
                                },
                                {
                                    "type": "task",
                                    "id": 492
                                },
                                {
                                    "type": "task",
                                    "id": 493
                                },
                                {
                                    "type": "task",
                                    "id": 494
                                },
                                {
                                    "type": "task",
                                    "id": 495
                                },
                                {
                                    "type": "task",
                                    "id": 496
                                },
                                {
                                    "type": "task",
                                    "id": 497
                                },
                                {
                                    "type": "task",
                                    "id": 498
                                },
                                {
                                    "type": "task",
                                    "id": 499
                                },
                                {
                                    "type": "task",
                                    "id": 500
                                },
                                {
                                    "type": "task",
                                    "id": 501
                                },
                                {
                                    "type": "task",
                                    "id": 502
                                },
                                {
                                    "type": "task",
                                    "id": 503
                                },
                                {
                                    "type": "task",
                                    "id": 504
                                },
                                {
                                    "type": "task",
                                    "id": 505
                                },
                                {
                                    "type": "task",
                                    "id": 506
                                }
                            ]
                        },
                        "punch_list": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200011/relationships/punch_list",
                                "related": "http://localhostx:3000/api/project/200011/punch_list"
                            },
                            "data": []
                        },
                        "daily_logs": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200011/relationships/daily_logs",
                                "related": "http://localhostx:3000/api/project/200011/daily_logs"
                            },
                            "data": []
                        },
                        "progression_notes": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200011/relationships/progression_notes",
                                "related": "http://localhostx:3000/api/project/200011/progression_notes"
                            },
                            "data": []
                        },
                        "change_orders": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200011/relationships/change_orders",
                                "related": "http://localhostx:3000/api/project/200011/change_orders"
                            },
                            "data": []
                        },
                        "specications": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200011/relationships/specications",
                                "related": "http://localhostx:3000/api/project/200011/specications"
                            },
                            "data": []
                        },
                        "selections": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200011/relationships/selections",
                                "related": "http://localhostx:3000/api/project/200011/selections"
                            },
                            "data": []
                        },
                        "bids": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200011/relationships/bids",
                                "related": "http://localhostx:3000/api/project/200011/bids"
                            },
                            "data": []
                        },
                        "files": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200011/relationships/files",
                                "related": "http://localhostx:3000/api/project/200011/files"
                            },
                            "data": []
                        }
                    }
                },
                {
                    "type": "project",
                    "id": 200012,
                    "attributes": {
                        "created_at": "2024-05-21T17:15:42.495Z",
                        "updated_at": "2024-05-21T17:15:42.495Z",
                        "active": true,
                        "home_owner_id": 100009,
                        "gc_business_id": 101003,
                        "name": "Koepka's 2nd home",
                        "description": "New home on a 0.6 acre lot with 4,000 square feet consisting of 5 bedrooms, 4 bathrooms, an unbelievable bonus room and private oasis in the back with your pool!",
                        "address1": "1062 Orchard Ct",
                        "address2": "",
                        "state": "SC",
                        "zipcode": "29715",
                        "city": "FortMill",
                        "status": "in progress",
                        "project_type": "CustomHome",
                        "contract_type": "fixed",
                        "budget_estimated": "420000",
                        "actual_spent": "440000",
                        "percentage_complete": "90",
                        "notes": "Constructionstarted-11",
                        "start_date": "2023-06-22T00:00:00.000Z",
                        "end_date": null,
                        "exception_notes": null,
                        "exception_dates": [],
                        "document_urls": [
                            "https://storage.cloud.google.com/buildify_user_uploads/projectimages/plan12.jpeg"
                        ]
                    },
                    "links": {
                        "self": "http://localhostx:3000/api/project/200012"
                    },
                    "relationships": {
                        "home_owner": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200012/relationships/home_owner",
                                "related": "http://localhostx:3000/api/project/200012/home_owner"
                            },
                            "data": {
                                "type": "user",
                                "id": 100009
                            }
                        },
                        "gc_business": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200012/relationships/gc_business",
                                "related": "http://localhostx:3000/api/project/200012/gc_business"
                            },
                            "data": {
                                "type": "business",
                                "id": 101003
                            }
                        },
                        "project_assignments": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200012/relationships/project_assignments",
                                "related": "http://localhostx:3000/api/project/200012/project_assignments"
                            },
                            "data": [
                                {
                                    "type": "project_Assignments",
                                    "id": 300127
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300156
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300157
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300012
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300069
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300070
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300071
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300072
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300073
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300074
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300075
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300087
                                },
                                {
                                    "type": "project_Assignments",
                                    "id": 300099
                                }
                            ]
                        },
                        "tasks": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200012/relationships/tasks",
                                "related": "http://localhostx:3000/api/project/200012/tasks"
                            },
                            "data": [
                                {
                                    "type": "task",
                                    "id": 507
                                },
                                {
                                    "type": "task",
                                    "id": 508
                                },
                                {
                                    "type": "task",
                                    "id": 509
                                },
                                {
                                    "type": "task",
                                    "id": 510
                                },
                                {
                                    "type": "task",
                                    "id": 511
                                },
                                {
                                    "type": "task",
                                    "id": 512
                                },
                                {
                                    "type": "task",
                                    "id": 513
                                },
                                {
                                    "type": "task",
                                    "id": 514
                                },
                                {
                                    "type": "task",
                                    "id": 515
                                },
                                {
                                    "type": "task",
                                    "id": 516
                                },
                                {
                                    "type": "task",
                                    "id": 517
                                },
                                {
                                    "type": "task",
                                    "id": 518
                                },
                                {
                                    "type": "task",
                                    "id": 519
                                },
                                {
                                    "type": "task",
                                    "id": 520
                                },
                                {
                                    "type": "task",
                                    "id": 521
                                },
                                {
                                    "type": "task",
                                    "id": 522
                                },
                                {
                                    "type": "task",
                                    "id": 523
                                },
                                {
                                    "type": "task",
                                    "id": 524
                                },
                                {
                                    "type": "task",
                                    "id": 525
                                },
                                {
                                    "type": "task",
                                    "id": 526
                                },
                                {
                                    "type": "task",
                                    "id": 527
                                },
                                {
                                    "type": "task",
                                    "id": 528
                                },
                                {
                                    "type": "task",
                                    "id": 529
                                },
                                {
                                    "type": "task",
                                    "id": 530
                                },
                                {
                                    "type": "task",
                                    "id": 531
                                },
                                {
                                    "type": "task",
                                    "id": 532
                                },
                                {
                                    "type": "task",
                                    "id": 533
                                },
                                {
                                    "type": "task",
                                    "id": 534
                                },
                                {
                                    "type": "task",
                                    "id": 535
                                },
                                {
                                    "type": "task",
                                    "id": 536
                                },
                                {
                                    "type": "task",
                                    "id": 537
                                },
                                {
                                    "type": "task",
                                    "id": 538
                                },
                                {
                                    "type": "task",
                                    "id": 539
                                },
                                {
                                    "type": "task",
                                    "id": 540
                                },
                                {
                                    "type": "task",
                                    "id": 541
                                },
                                {
                                    "type": "task",
                                    "id": 542
                                },
                                {
                                    "type": "task",
                                    "id": 543
                                },
                                {
                                    "type": "task",
                                    "id": 544
                                },
                                {
                                    "type": "task",
                                    "id": 545
                                },
                                {
                                    "type": "task",
                                    "id": 546
                                },
                                {
                                    "type": "task",
                                    "id": 547
                                },
                                {
                                    "type": "task",
                                    "id": 548
                                },
                                {
                                    "type": "task",
                                    "id": 549
                                },
                                {
                                    "type": "task",
                                    "id": 550
                                },
                                {
                                    "type": "task",
                                    "id": 551
                                },
                                {
                                    "type": "task",
                                    "id": 552
                                }
                            ]
                        },
                        "punch_list": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200012/relationships/punch_list",
                                "related": "http://localhostx:3000/api/project/200012/punch_list"
                            },
                            "data": []
                        },
                        "daily_logs": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200012/relationships/daily_logs",
                                "related": "http://localhostx:3000/api/project/200012/daily_logs"
                            },
                            "data": []
                        },
                        "progression_notes": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200012/relationships/progression_notes",
                                "related": "http://localhostx:3000/api/project/200012/progression_notes"
                            },
                            "data": []
                        },
                        "change_orders": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200012/relationships/change_orders",
                                "related": "http://localhostx:3000/api/project/200012/change_orders"
                            },
                            "data": []
                        },
                        "specications": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200012/relationships/specications",
                                "related": "http://localhostx:3000/api/project/200012/specications"
                            },
                            "data": []
                        },
                        "selections": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200012/relationships/selections",
                                "related": "http://localhostx:3000/api/project/200012/selections"
                            },
                            "data": []
                        },
                        "bids": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200012/relationships/bids",
                                "related": "http://localhostx:3000/api/project/200012/bids"
                            },
                            "data": []
                        },
                        "files": {
                            "links": {
                                "self": "http://localhostx:3000/api/project/200012/relationships/files",
                                "related": "http://localhostx:3000/api/project/200012/files"
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
                        "data.0.attributes.budget_estimated": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.0.attributes.actual_spent": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.0.attributes.percentage_complete": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.0.attributes.start_date": [
                            "Date"
                        ],
                        "data.1.attributes.created_at": [
                            "Date"
                        ],
                        "data.1.attributes.updated_at": [
                            "Date"
                        ],
                        "data.1.attributes.budget_estimated": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.1.attributes.actual_spent": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.1.attributes.percentage_complete": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.1.attributes.start_date": [
                            "Date"
                        ],
                        "data.2.attributes.created_at": [
                            "Date"
                        ],
                        "data.2.attributes.updated_at": [
                            "Date"
                        ],
                        "data.2.attributes.budget_estimated": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.2.attributes.actual_spent": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.2.attributes.percentage_complete": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.2.attributes.start_date": [
                            "Date"
                        ],
                        "data.3.attributes.created_at": [
                            "Date"
                        ],
                        "data.3.attributes.updated_at": [
                            "Date"
                        ],
                        "data.3.attributes.budget_estimated": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.3.attributes.actual_spent": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.3.attributes.percentage_complete": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.3.attributes.start_date": [
                            "Date"
                        ],
                        "data.4.attributes.created_at": [
                            "Date"
                        ],
                        "data.4.attributes.updated_at": [
                            "Date"
                        ],
                        "data.4.attributes.budget_estimated": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.4.attributes.actual_spent": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.4.attributes.percentage_complete": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.4.attributes.start_date": [
                            "Date"
                        ],
                        "data.5.attributes.created_at": [
                            "Date"
                        ],
                        "data.5.attributes.updated_at": [
                            "Date"
                        ],
                        "data.5.attributes.budget_estimated": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.5.attributes.actual_spent": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.5.attributes.percentage_complete": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.5.attributes.start_date": [
                            "Date"
                        ],
                        "data.6.attributes.created_at": [
                            "Date"
                        ],
                        "data.6.attributes.updated_at": [
                            "Date"
                        ],
                        "data.6.attributes.budget_estimated": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.6.attributes.actual_spent": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.6.attributes.percentage_complete": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.6.attributes.start_date": [
                            "Date"
                        ],
                        "data.7.attributes.created_at": [
                            "Date"
                        ],
                        "data.7.attributes.updated_at": [
                            "Date"
                        ],
                        "data.7.attributes.budget_estimated": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.7.attributes.actual_spent": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.7.attributes.percentage_complete": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.7.attributes.start_date": [
                            "Date"
                        ],
                        "data.8.attributes.created_at": [
                            "Date"
                        ],
                        "data.8.attributes.updated_at": [
                            "Date"
                        ],
                        "data.8.attributes.budget_estimated": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.8.attributes.actual_spent": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.8.attributes.percentage_complete": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.8.attributes.start_date": [
                            "Date"
                        ],
                        "data.9.attributes.created_at": [
                            "Date"
                        ],
                        "data.9.attributes.updated_at": [
                            "Date"
                        ],
                        "data.9.attributes.budget_estimated": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.9.attributes.actual_spent": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.9.attributes.percentage_complete": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.9.attributes.start_date": [
                            "Date"
                        ],
                        "data.10.attributes.created_at": [
                            "Date"
                        ],
                        "data.10.attributes.updated_at": [
                            "Date"
                        ],
                        "data.10.attributes.budget_estimated": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.10.attributes.actual_spent": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.10.attributes.percentage_complete": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.10.attributes.start_date": [
                            "Date"
                        ],
                        "data.11.attributes.created_at": [
                            "Date"
                        ],
                        "data.11.attributes.updated_at": [
                            "Date"
                        ],
                        "data.11.attributes.budget_estimated": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.11.attributes.actual_spent": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.11.attributes.percentage_complete": [
                            [
                                "custom",
                                "Decimal"
                            ]
                        ],
                        "data.11.attributes.start_date": [
                            "Date"
                        ]
                    }
                },
                "total": 12
            }
        }
    
    res.status(200).json(json)
}