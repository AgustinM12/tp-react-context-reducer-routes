import React, { useContext } from "react";

export const Tasks = () => {

    const { state } = useContext(TaskContext);

    return (
        <div className="container">
            <pre>
                <code>
                    {JSON.stringify(state, null, 3)}
                </code>
            </pre>
        </div>
    )


}