import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { MovieModel, PersonModel, TVSerieModel } from "../types";

interface ContextProps {
    list?: (MovieModel | TVSerieModel | PersonModel)[];
    setList?: React.Dispatch<
        React.SetStateAction<(MovieModel | TVSerieModel | PersonModel)[]>
    >;
    children?: ReactNode;
}

const BookMarkListContext = createContext<ContextProps>({});

const BookmarkListContextProvider = ({ children }: ContextProps) => {
    const [list, setList] = useState<
        (MovieModel | TVSerieModel | PersonModel)[]
    >([]);

    const value = useMemo(() => {
        return {
            list,
            setList,
        };
    }, [list]);

    return (
        <BookMarkListContext.Provider value={value}>
            {children}
        </BookMarkListContext.Provider>
    );
};

const useBookMarList = (): ContextProps => {
    const context = useContext(BookMarkListContext);

    if (context == null || context === undefined)
        throw new Error(
            "useBookMarList debe usarse dentro de BookmarkListContext"
        );

    return context;
};

export { BookMarkListContext, BookmarkListContextProvider, useBookMarList };
