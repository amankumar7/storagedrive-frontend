let currentUser = null;

export function setUser(user) {
    currentUser = user;
}

export function getUser() {
    return currentUser;
}

export function getUserId() {
    return currentUser?.id;
}

export function getUsername() {
    return currentUser?.username;
}

export function getEmail() {
    return currentUser?.email;
}

export function getRoles() {
    return currentUser?.roles || [];
}

export function clearUser() {
    currentUser = null;
}