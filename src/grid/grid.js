import './grid.scss';
import { useState } from 'react';

const GridOne = () => {
    const [page, setPage] = useState(0);

    const changePage = (action) => setPage(action == 'next' ? page + 1 : page - 1);

    return (<>
        <div className='container'>
            <h1>Grid</h1>
            <button disabled={page === 0} onClick={() => changePage('back')}>Back</button>
            <button disabled={page === 2} onClick={() => changePage('next')}>Next </button>
        </div>
        {page == 0 &&
            <div className='container repeat'>
                {new Array(8).fill(1).map(() => <div className='item' />)}
            </div>
        }

        {page == 1 &&
            <>
                <div className='container grid2 to-right'>
                    {new Array(3).fill(1).map(() => <div className='item' />)}
                </div>
                <div className='container grid2 to-left'>
                    {new Array(3).fill(1).map(() => <div className='item' />)}
                </div>
                <div className='container grid2 middle'>
                    {new Array(3).fill(1).map(() => <div className='item' />)}
                </div>
            </>
        }
        {page == 2 &&
            <div className='container grid-template-area '>
                <header className='item' />
                <aside className='item' />
                <main className='item' />
                <footer className='item' />
            </div>
        }
    </>
    )
}

export { GridOne }