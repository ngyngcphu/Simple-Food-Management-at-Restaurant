export const sortNS = (a, b) => {
    if (a.id > b.id) return 1;
    if (a.id < b.id) return -1;
    return 0;
};

export const sortNA = (a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
};

export const sortND = (a, b) => {
    if (a.name < b.name) return 1;
    if (a.name > b.name) return -1;
    return 0;
};

export const sortPA = (a, b) => {
    if (
        a.price * (1 - parseFloat(a.discount) / 100) >
        b.price * (1 - parseFloat(b.discount) / 100)
    )
        return 1;
    if (
        a.price * (1 - parseFloat(a.discount) / 100) <
        b.price * (1 - parseFloat(b.discount) / 100)
    )
        return -1;
    return 0;
};

export const sortPD = (a, b) => {
    if (
        a.price * (1 - parseFloat(a.discount) / 100) <
        b.price * (1 - parseFloat(b.discount) / 100)
    )
        return 1;
    if (
        a.price * (1 - parseFloat(a.discount) / 100) >
        b.price * (1 - parseFloat(b.discount) / 100)
    )
        return -1;
    return 0;
};