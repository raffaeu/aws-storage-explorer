export type Account = {
    name: string;
    buckets: Bucket[];
}

export type Bucket = {
    name: string;
    region: string;
    accessKeyId: string;
    secretAccessKey: string;
    account: Account;
}