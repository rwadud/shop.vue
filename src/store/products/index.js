export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 'p1',
          image: '/img/p1.jpg',
          title: 'Lenovo Tab M8',
          description: `Stunning and stylish, the Lenovo Tab M8 is the 2nd generation multimedia tablet that's tailored to make your entertainment experience richer.`,
          price: 134.99,
        },
        {
          id: 'p2',
          image: '/img/p2.jpg',
          title: 'Macbook Air M2',
          description: `8-Core CPU 8-Core GPU 8GB Unified Memory 256GB SSD Storage`,
          price: 1499.99,
        },
        {
          id: 'p3',
          image: '/img/p3.jpg',
          title: 'NVIDIA GeForce RTX 4090 24GB GDDR6 Video Card',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 2099.99,
        },
      ],
    };
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
};
