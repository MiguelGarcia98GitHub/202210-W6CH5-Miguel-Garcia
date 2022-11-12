export class ShopItemsRepository {
    url: string;
    constructor(url = "https://w6ch5-backend.onrender.com/cart") {
        this.url = url;
    }

    createError(response: Response) {
        return "error";
    }

    // read / get
    getAll() {
        return fetch(this.url).then((response) => {
            if (response.ok) {
                return response.json();
            }
            return this.createError(response);
        });
    }

    // create / post
    create(task: Object) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(task),
            headers: {
                "content-type": "application/json",
            },
        }).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }

    // // delete
    // delete(character: Object) {
    //     return fetch(`${this.url}/${character.id}`, {
    //         method: "DELETE",
    //     }).then((response) => {
    //         if (!response.ok) throw this.createError(response);
    //     });
    // }

    // // update / patch
    // update(partialTask: Object) {
    //     return fetch(`${this.url}/${partialTask.id}`, {
    //         method: "PATCH",
    //         body: JSON.stringify(partialTask),
    //         headers: {
    //             "content-type": "application/json",
    //         },
    //     }).then((response) => {
    //         if (response.ok) return response.json();
    //         throw this.createError(response);
    //     });
    // }
}
