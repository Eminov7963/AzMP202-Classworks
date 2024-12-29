import { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from 'antd';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa';
import { BasketContext } from '../../../context/Basket';

const Basket = () => {
    const { basket, removeBasketItem, increaseBasketCount, decreaseBasketCount, clearBasket,  } = useContext(BasketContext);
    return (
        <>
            {basket.length === 0 ? (
                <h2 style={{ textAlign: 'center', color: '#777' }}>Basket is empty</h2>
            ) : (
                <TableContainer component={Paper} sx={{ boxShadow: 3, marginTop: 3 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Photo</TableCell>
                                <TableCell align="right">Title</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Increase</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">Decrease</TableCell>
                                <TableCell align="right">Subtotal</TableCell>
                                <TableCell align="right">Remove</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {basket.map((p) => (
                                <TableRow
                                    key={p.id}
                                    sx={{
                                        '&:last-child td, &:last-child th': { border: 0 },
                                        backgroundColor: '#f9f9f9',
                                        '&:hover': { backgroundColor: '#f1f1f1' },
                                    }}
                                >
                                    <TableCell component="th">
                                        <img src={p.image} alt={p.title} width={100} style={{ borderRadius: '8px' }} />
                                    </TableCell>
                                    <TableCell align="right">{p.title}</TableCell>
                                    <TableCell align="right">${p.price}</TableCell>
                                    <TableCell align="right">
                                        <Button
                                            onClick={() => { increaseBasketCount(p); }}
                                            style={{
                                                backgroundColor: '#4CAF50',
                                                color: 'white',
                                                margin: '0 5px',
                                                borderRadius: '5px',
                                            }}
                                        >
                                            <FaPlus />
                                        </Button>
                                    </TableCell>
                                    <TableCell align="right">{p.quantity}</TableCell>
                                    <TableCell align="right">
                                        <Button
                                            onClick={() => { decreaseBasketCount(p); }}
                                            style={{
                                                backgroundColor: '#F44336',
                                                color: 'white',
                                                margin: '0 5px',
                                                borderRadius: '5px',
                                            }}
                                        >
                                            <FaMinus />
                                        </Button>
                                    </TableCell>
                                    <TableCell align="right">${p.quantity * p.price}</TableCell>
                                    <TableCell align="right">
                                        <Button
                                            onClick={() => { removeBasketItem(p); }}
                                            style={{
                                                backgroundColor: '#9E9E9E',
                                                color: 'white',
                                                margin: '0 5px',
                                                borderRadius: '5px',
                                            }}
                                        >
                                            <FaTrash />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div style={{ padding: '10px', textAlign: 'right', marginTop: '20px' }}>
                                            
                        <Button
                            onClick={() => { clearBasket(); }}
                            style={{
                                backgroundColor: '#FF5722',
                                color: 'white',
                                borderRadius: '5px',
                                marginTop: '10px',
                            }}
                        >
                            Clear Basket
                        </Button>
                    </div>
                </TableContainer>
            )}
        </>
    );
};

export default Basket;
