interface AuthServerAPIResponse {
    meta?: object;
    data?: object;
}

interface AuthServerAPIRequest {
    user_agent: string;
    ip: string;
    mac: string;
    location: geoTag;
    credentials?: object;
}

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

interface geoTag {
    ns: string;
    ew: string;
}

enum StatusCode {
    AUTHERROR = 0,
    SESSIONOK= 1,
    INCONSISTENTDATA = 2,
    LOGOUTOK=3,
}

interface AuthServerAPI {
    name: string;
    method: "POST"|"GET"|"PUT"|"DELETE";
    address: string;
    request: AuthServerAPIRequest;
    response: AuthServerAPIResponse;
}

const endpoints: AuthServerAPI[] = [
    {
        name: "init_session",
        method: "POST",
        address: "/auth",
        request: {
            user_agent: "string",
            ip: "^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",
            mac: "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$",
            location: {
                ns: "^(-?\\d{1,2}\\.\\d{6})",
                ew: "^(-?\\d{1,2}\\.\\d{6})",
            },
            credentials: {
                login: "string",
                password: "string",
            }
        },
        response: {
            meta: {
                server_time: "int timestamp millis",
                expire_time: "int timestamp millis",
            },
            data: {
                status_code: "int",
                session_certificate: "SessionCertificate",
            },
        },
    },
    {
        name: "postpone session",
        method: "PUT",
        address: "/auth",
        request: {
            user_agent: "string",
            ip: "^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",
            mac: "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$",
            location: {
                ns: "^(-?\\d{1,2}\\.\\d{6})",
                ew: "^(-?\\d{1,2}\\.\\d{6})",
            },
            credentials: {
                session_certificate: "SessionCertificate",
            },
        },
        response:{
            meta: {
                meta: {
                    server_time: "int timestamp millis",
                    expire_time: "int timestamp millis",
                },
                data: {
                    status_code: "int",
                },
            },
        },
    },
    {
        name: "logOut",
        method: "DELETE",
        address: "/auth",
        request: {
            user_agent: "string",
            ip: "^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",
            mac: "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$",
            location: {
                ns: "^(-?\\d{1,2}\\.\\d{6})",
                ew: "^(-?\\d{1,2}\\.\\d{6})",
            },
            credentials: {
                session_certificate: "SessionCertificate",
            },
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