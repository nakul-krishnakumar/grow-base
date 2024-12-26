export interface StartupCardType {
    _createdAt: Date,
    views: number,
    author: {
        _id: number,
        name: string,
        image?: string,
        username?: string,
    }
    _id: number,
    description: string,
    image: string,
    category: string,
    title: string,
    pitch?: string,
}