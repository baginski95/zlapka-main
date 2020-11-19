﻿import { SessionCertificate, geoTag } from "./AuthServerAPI";
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

interface UserVoucher { //!!! Re-think about it !!!!
    voucher_id: bigint;
    user_name: string;
    type: VoucherType;
    value: bigint;
}

enum VoucherType { // Focus on it later
    DISCOUNT,
    FOR_FREE,
}

interface UserPreference { // ???????????
    preference_id: bigint;
    user_name: string;
    name: string;
}

interface Preference {      // ??????
    preference_id: bigint;
    name: string;
}

interface UserOrganization {
    user_name: string;
    organization_name: string;
    role: Role;
}

interface organization {
    organization_name: string;
    phone_number: bigint;
    email: string;
    score: bigint;
    advertisements: advertisement[]; // We need to think about it.
}

interface advertisement { // ??????
    advertisement_id: bigint;
    information: string;
    targets: target[];
    picture: string;
}

interface target { // ?????
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
        address: "/user/{user_name}",
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
        address: "/user/{user_name}",
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