const stringifySearch = (search: Search): string => {
    return Object.entries(search)
        .reduce(
            (t, v) => `${t}${v[0]}=${encodeURIComponent(v[1])}&`,
            Object.keys(search).length ? "?" : ""
        )
        .replace(/&$/, "");
};

interface Search {
    [key: string]: string;
}

const argObjectToSearch = {
    firstName: "John",
    lastName: "Doe",
    email: "j.doe@example.com",
}

const search = stringifySearch(argObjectToSearch);

const link = `https://example.com/api${search}`;

console.log(link);