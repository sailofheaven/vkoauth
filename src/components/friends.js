import React, { PropTypes, Component } from 'react'

export default (props) => {
    const { data } = props;
    return (
        <div className="page_block">
            <div className="module_body clear_fix">
                {data.map(friend =>
                    <div className="people_cell" key={friend.id}>
                        <div className="people_cell_ava">
                            <img className="people_cell_img" src={friend.photo_50} />
                            <span className="blind_label">.</span>
                        </div>
                        <div className="people_cell_name">
                            {friend.first_name}
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}