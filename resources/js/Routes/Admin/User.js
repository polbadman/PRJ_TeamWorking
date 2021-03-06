import React, {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';

function User(props) {
    const [pagination, setPagination] = useState({});


    useEffect(() => {
        axios.get(`/user`)
            .then(response => jsonHandler(response.data))
            .catch(err => {
            });
    }, [])

    let jsonHandler = (data) => {
        setPagination({
            ...data
        })
    }

    const columns = [
        {
            name: 'شناسه',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'نام',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'نام خانوادگی',
            selector: 'family',
            sortable: true,
        },
        {
            name: 'شماره دانشجویی',
            selector: 'student',
            sortable: true,
        },
    ];

    return (
        <>
            <div className="todosList">
                <div className="container">
                    <div className="d-flex flex-column align-items-center ">
                        {
                            <DataTable
                                title="کاربران"
                                columns={columns}
                                data={pagination.data}
                            />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default User;
