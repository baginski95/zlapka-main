interface BoardApiRequest {
    credentials: string;
    user_data?: object;
}

interface BoardApiResponse {
    meta?: object;
    data?: object;
}

interface BoardServerApi {
    name: string;
    method: "POST" | "GET" | "PUT" | "DELETE";
    address: string;
    request: BoardApiRequest;
    response: BoardApiResponse;
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