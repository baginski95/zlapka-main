import {SessionCertificate} from "./AuthServerAPI";

interface EventServerApiRequest {
    credentials: string;
    event_data?: object;
    search_params?: object;
}

interface EventServerApiResponse {
    meta?: object;
    data?: object;
}

interface EventServerApi {
    name: string;
    method: "POST"|"GET"|"PUT"|"DELETE";
    address: string;
    request: EventServerApiRequest;
    response: EventServerApiResponse;
}

interface EventData {
    id: bigint;
    location_id: bigint;
    age_limit: bigint;
    domain: string;
    name: string;
    description: string;
    max_participant: bigint;
    date_time: string;
    duration: bigint;
    public_event: boolean;
    score: bigint;
    category_name: string;
    organization_id: bigint;
}

const endpoints: EventServerApi[] = [
    {
        name: "get_events",
        method: "GET",
        address: "/event",
        request: {
            credentials: "SessionCertificate",
            search_params: {
                id: "bigint",
                location_id: "bigint",
                age_limit: "bigint",
                domain: "string",
                name: "string",
                description: "string",
                max_participant: "bigint",
                date_time: "string",
                duration: "long",
                public_event: "boolean",
                score: "bigint",
                category_name: "string",
                organization_id: "bigint",
            },
        },
        response: {
            meta: {
                server_time: "int timestamp millis",
            },
            data: {
                status_code: "int",
                event_list: [
                    //...
                    "EventData",
                ],
            },
        },
    },
    {
        name: "post_events",
        method: "POST",
        address: "/event",
        request: {
            credentials: "SessionCertificate",
            event_data: {event_data: "EventData"},
        },
        response: {
            meta: {
                server_time: "int timestamp millis",
            },
            data: {
                status_code: "int",
            },
        },
    },
    {
        name: "put_events",
        method: "PUT",
        address: "/event",
        request: {
            credentials: "SessionCertificate",
            event_data: {event_data: "EventData"},
        },
        response: {
            meta: {
                server_time: "int timestamp millis",
            },
            data: {
                status_code: "int",
            },
        },
    },
    {
        name: "delete_events",
        method: "DELETE",
        address: "/event",
        request: {
            credentials: "SessionCertificate",
            event_data: {event_data: "EventData"},
        },
        response: {
            meta: {
                server_time: "int timestamp millis",
            },
            data: {
                status_code: "int",
            },
        },
    },
    {
        name: "enroll_user",
        method: "PUT",
        address: "/event/participant",
        request: {
            credentials: "SessionCertificate",
            event_data: {event_data: "EventData"},
        },
        response: {
            meta: {
                server_time: "int timestamp millis",
            },
            data: {
                status_code: "int",
            },
        },
    },
    {
        name: "delete_user",
        method: "DELETE",
        address: "/event/participant",
        request: {
            credentials: "SessionCertificate",
            event_data: {event_data: "EventData"},
        },
        response: {
            meta: {
                server_time: "int timestamp millis",
            },
            data: {
                status_code: "int",
            },
        },
    },
]
