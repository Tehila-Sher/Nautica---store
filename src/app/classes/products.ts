export class Products {
    constructor(
        public productId: number,
        public productName: string,
        public categoryId: number,
        public description: string,
        public price: number,
        public stockQuantity: number,
        public imageSrc: string
    ){}
}

