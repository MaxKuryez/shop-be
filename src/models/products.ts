export interface Rating {
  rate: number;
  count: number;
}

export class Product {
  constructor(
    public title: string,
    public price: number,
    public description: string,
    public image: string,
    public category: string,
  ) {}
}

export class ProductRated extends Product {
  constructor(
    title: string,
    price: number,
    description: string,
    image: string,
    category: string,
    public rating: Rating
  ) {
    super(
    title,
    price,
    description,
    image,
    category,
    )
  }
}
