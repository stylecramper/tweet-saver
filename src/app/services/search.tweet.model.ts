interface User {
    name: string;
    screenName: string;
    profileImageUrl: string;
}

export class Tweet {
    private _text: string;
    private _createdAt: Date;
    private _user: User;

    constructor(
        text: string,
        createdAt: number,
        user: User
    ) {
        this._text = text;
        this._createdAt = new Date(createdAt);
        this._user = this.storeUser(user);
    }

    get text(): string {
        return this._text;
    }

    set text(text: string) {
        this._text = text;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    set createdAt(newDate: Date) {
        this._createdAt = newDate;
    }

    get user(): User {
        return this._user;
    }

    set user(newUser: User) {
        this._user = newUser;
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
