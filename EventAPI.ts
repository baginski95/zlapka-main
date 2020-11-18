
// -------------------------------------------------------------------------------------

interface SessionCertificate {
    session_id: string;
    session_key: string;
    user_category: Role;
    user_score: bigint;
    user_agent: string;
    ip: "^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
    mac: "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$";
    session_start: "int timestamp millis";
    session_expire: "int timestamp millis";
    location: {
        ns: "^(-?\\d{1,2}\\.\\d{6})",
        ew: "^(-?\\d{1,2}\\.\\d{6})",
    };
    organization_roles: OrganizationRole[];
    special_permissions: string[];
    special_limitations: string[];
    ca_signed_hash: string;
}

interface OrganizationRole {
    org_name: "String";
    org_role: Role;
}

enum Role {
    FOUNDER,
    ADMIN,
    MODERATOR,
    CONTRIBUTOR,
    PARTICIPANT,
}

// ------------------------------------------------------------------------

interface EventServerApiRequest {
    user_agent: string;
    ip: string;
    mac: string;
    credentials: SessionCertificate;
    event_data?: EventData;
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
    duration: long;
    public_event: boolean;
    score: bigint;
    category_name: string;
    organization_id: bigint;
}

const endpoints: EventServerAPI[] = [
    {
        name: "get_events",
        method: "GET",
        address: "/event",
        request: {
            user_agent: "string",
            ip: "^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",
            mac: "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$",
            location: {
                ns: "^(-?\\d{1,2}\\.\\d{6})",
                ew: "^(-?\\d{1,2}\\.\\d{6})",
            },
            credentials: "SessionCertificate",
            search_params: {
                id: "bigint";
                location_id: "bigint";
                age_limit: "bigint";
                domain: "string";
                name: "string";
                description: "string";
                max_participant: "bigint";
                date_time: "string";
                duration: "long";
                public_event: "boolean";
                score: "bigint";
                category_name: "string";
                organization_id: "bigint";
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
        
    {
        name: "post_events",
        method: "POST",
        address: "/event",
        request: {
            user_agent: "string",
            ip: "^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",
            mac: "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$",
            location: {
                ns: "^(-?\\d{1,2}\\.\\d{6})",
                ew: "^(-?\\d{1,2}\\.\\d{6})",
            },
            credentials: "SessionCertificate",
            event_data: "EventData";
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
            user_agent: "string",
            ip: "^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",
            mac: "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$",
            location: {
                ns: "^(-?\\d{1,2}\\.\\d{6})",
                ew: "^(-?\\d{1,2}\\.\\d{6})",
            },
            credentials: "SessionCertificate",
            event_data: "EventData";
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
            user_agent: "string",
            ip: "^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",
            mac: "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$",
            location: {
                ns: "^(-?\\d{1,2}\\.\\d{6})",
                ew: "^(-?\\d{1,2}\\.\\d{6})",
            },
            credentials: "SessionCertificate",
            event_data: "EventData"
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
            user_agent: "string",
            ip: "^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",
            mac: "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$",
            location: {
                ns: "^(-?\\d{1,2}\\.\\d{6})",
                ew: "^(-?\\d{1,2}\\.\\d{6})",
            },
            credentials: "SessionCertificate",
            event_data: "EventData";
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
            user_agent: "string",
            ip: "^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",
            mac: "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$",
            location: {
                ns: "^(-?\\d{1,2}\\.\\d{6})",
                ew: "^(-?\\d{1,2}\\.\\d{6})",
            },
            credentials: "SessionCertificate",
            event_data: "EventData";
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
