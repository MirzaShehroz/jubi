import React, { useState } from "react";
import {  useRecoilValue } from "recoil";
import { memoList_ } from "../../data/atom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import AddMemo from "./add_memo";
import RemoveMemo from "./remove_memo";

function Memo() {
    const [modalShowAW, setModalShowAW] = useState(false);
    const [modalShowRW, setModalShowRW] = useState(false);
    const memoList = useRecoilValue(memoList_);

    const showMemo = () => {
        if (memoList.length > 0) {
            setModalShowAW(false);
            setModalShowRW(true)
            return;
        } else {
            setModalShowAW(true)
            setModalShowRW(false)
            return;
        }
    }
    return (
        <>
            <td className={'memoHeadIcon'} onClick={showMemo}><FontAwesomeIcon icon={faPen} /></td>
            {/* memo AddModal*/}
            <AddMemo
                show={modalShowAW}
                onHide={() => setModalShowAW(false)}
            />
            {/**/}
            {/* memo removeModal*/}
            <RemoveMemo
                show={modalShowRW}
                onHide={() => setModalShowRW(false)}
            />
        </>
    )
}
export default Memo;