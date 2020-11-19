import { SessionCertificate, geoTag } from "./AuthServerAPI";
import { Role } from "./AuthServerAPI";
import { EventData } from "./EventApi";

interface UserApiRequest {
    credentials: string;
    user_data?: object;
}

interface UserApiResponse {
    meta?: object;
    data?: object;
}

interface UserServerApi {
    name: string;
    method: "POST" | "GET" | "PUT" | "DELETE";
    address: string;
    request: UserApiRequest;
    response: UserApiResponse;
}

interface UserData {
    user_id: bigint;  // Do we need it in our requests? ev. hash it!
    user_name: string;
    first_name: string;
    last_name: string;
    description: string;
    photo: string; //path to a file
    email: string;
    phone_number: bigint; //where do we need it ?
    age: bigint;
    score: bigint; // Should I insert here lists of user_relations, user_preference, etc.?
    role: Role;
    /*
    preferences: UserPreference[]; itp. itd.
    my_events: EventData[];
     */
}

interface UserGroups {
    group_id: bigint;
    name: string;
    public: boolean;
    threads: GroupThread[];
}

interface GroupThread {
    thread_id: bigint;
    group_id: bigint;
    user_id: bigint; // Maybe using username is better, and then Apis will map username to user_id
    title: string;
    content: string; // conent may have string or path to content(for example: path to photo)
    photo: string;
    comments: Comment[];
}

interface Comment {
    comment_id: bigint;
    content: string;
    user_id: bigint;
    thread_id: bigint; // Is it neccessery? cause comment belongs to any GroupThread which already has filed with it
}

interface UserVoucher {
    voucher_id: bigint;
    user_id: bigint;
    type: VoucherType;
    value: bigint;
}

enum VoucherType {
    DISCOUNT,
    FOR_FREE, // What else guys?
}

interface UserPreference {
    preference_id: bigint;
    user_id: bigint;
    name: string;
}

interface Preference {      // ??????
    preference_id: bigint;
    name: string;
}

interface UserOrganization {
    user_id: bigint;
    organization_id: bigint;
    role: Role;
}

interface organization {
    organization_id: bigint;
    name: string;
    phone_number: bigint;
    email: string;
    score: bigint;
    advertisements: advertisement[]; // We need to think about it.
}

interface advertisement {
    advertisement_id: bigint;
    information: string;
    targets: target[];
    picture: string;
}

interface target {
    target_id: number;
    geo_tag: geoTag;
    distance: bigint;
    age: bigint;
    preferences: Preference[];
    category: string;
}



const endpoints: UserServerApi[] = [
    {
        name: "get_user_info",
        method: "GET",
        address: "/user/{user_id}",
        request: {
            credentials: "SessionCertificate",
            user_data: null,
        },
        response: {
            meta: {
                server_time: "int timestamp millis",
            },
            data: {
                status_code: "int",
                user_data: "UserData",
            },
        }

    },
    {
        name: "post_user_info",
        method: "POST",
        address: "/user/{id}",
        request: {
            credentials: "SessionCertificate",
            user_data: UserData,
        },
        response: {
            meta: {
                server_time: "int timestamp millis",
            },
            data: {
                status_code: "int",
            },
        }

    }
]