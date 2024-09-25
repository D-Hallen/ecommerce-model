export const logInUser = (email, password) => {
    if (email === "daniel@example.com" && password === "123456") {
        return {
            id: 1,
            name: "Daniel",
            email: "daniel@example.com",
            cartItems: [],
            orders: [],            
        }
    } else {
        return null
    }
}