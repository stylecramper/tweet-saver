interface User {
    name: string;
    screenName: string;
    profileImageUrl: string;
}

export class Tweet {
    text: string;
    createdAt: Date;
    user: User;

    constructor(
        text: string,
        createdAt: number,
        user: User
    ) {
        this.text = text;
        this.createdAt = new Date(createdAt);
        this.user = this.storeUser(user);
    }

    storeUser(user:any): User {
        return {
            name: user.name,
            screenName: user.screenName,
            profileImageUrl: user.profileImageUrlHttps
        };
    }
}

export interface TweetListType {
    tweets: Tweet[]
}
