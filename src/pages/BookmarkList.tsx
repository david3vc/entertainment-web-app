import { useEffect, useState } from "react";
import { PageLayout } from "../components/page-layout";
import { useBookMarList } from "../context/BookmarkListContext";
import Recommended from "../components/Recommended";
import { SearchMultiResponseModel } from "../types";
import { TIPO_VISTA } from "../constants";
import Modal from "../components/modal/modal";
import { Boton, ContenedorBotones, Contenido } from "../components/modal/estilos";

const BookmarkList = () => {
    const { list } = useBookMarList();
    const [data, setData] = useState<SearchMultiResponseModel>();

    useEffect(() => {
        if ((list?.length ?? 0) > 0) {
            console.log(list);
            const res: SearchMultiResponseModel = {
                page: 0,
                total_pages: 0,
                total_result: 0,
                results: list,
            };
            setData(res);
        }
    }, [list]);

    const [showModal1, setShowModal1] = useState(false);

    return (
        <PageLayout>
            <>
                <ContenedorBotones>
                    <Boton onClick={() => setShowModal1(true)}>Modal 1</Boton>
                </ContenedorBotones>
                <Modal titulo="prueba" mostrarHeader={false} showModal={showModal1} setShowModal={setShowModal1}>
                    <Contenido>
                        <h1>Ventana Modal</h1>
                        <p>ssssssss sssssssssss sssssssssss sssssssss sssssss</p>
                        <Boton>Aceptar</Boton>
                    </Contenido>
                </Modal>

                <Recommended
                    data={data}
                    isSearchMulti={false}
                    search={""}
                    tipoVista={TIPO_VISTA.bookmarked}
                />
            </>
        </PageLayout>
    );
};

export default BookmarkList;