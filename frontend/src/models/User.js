class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getAge() {
        return this.age;
    }

    setName(name) {
        this.name = name;
    }

    setEmail(email) {
        this.email = email;
    }

    setAge(age) {
        this.age = age;
    }
}

module.exports = User;