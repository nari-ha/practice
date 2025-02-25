import React, { useState } from 'react';

const Main = () => {
    const [cnt, setCnt] = useState(0);
    const updateCnt = () => setCnt(cnt+1);
    const clearCnt = () => setCnt(0);

    return (
        <div>
            클릭 횟수는 {cnt}번 이다.
            <div>
                <button onClick={updateCnt}>클릭</button>
                <button onClick={clearCnt}>Clear</button>
            </div>
        </div>
    );
};

export default Main;