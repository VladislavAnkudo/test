import React, { useState } from 'react';
import { Header } from '../component/header';
import { LeftBar } from '../component/leftBar';
import { TablePersonal } from '../component/tablePersonal';
import { FilterPanelPersonal } from '../component/filterPanelPersonal';
import { RedactionPanel } from '../component/redactionPanel';
import { registration } from '../http/userApi';

function Personal() {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        password: '',
        role: 'USER',
        area: '',
        shop: '',
        img: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'img') {
            setFormData({
                ...formData,
                img: files[0] // Сохраняем файл для отправки
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, contact, password, role, area, shop, img } = formData;

        const form = new FormData();
        form.append('name', name);
        form.append('contact', contact);
        form.append('password', password);
        form.append('role', role);
        form.append('area', area);
        form.append('shop', shop);
        form.append('img', img); // Добавляем изображение в форму

        try {
            const user = await registration(form);
            console.log('Пользователь зарегистрирован:', user);
        } catch (error) {
            console.error('Ошибка регистрации пользователя:', error);
        }
    };

    return (
        <div>
            <Header />
            <main className='main'>
                <div className="container">
                    <div className='main__second_wrapper'>
                        <LeftBar />
                        <div className='right__side'>
                            <RedactionPanel />
                            <div className='right__side_wrapper_two_blocks'>
                                <FilterPanelPersonal />
                                <div className='right__side_third_block'>
                                    <TablePersonal />
                                </div>
                            </div>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="name">имя:</label>
                                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                                    </div>
                                    <div>
                                        <label htmlFor="contact">контакт:</label>
                                        <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} required />
                                    </div>
                                    <div>
                                        <label htmlFor="password">пароль:</label>
                                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                                    </div>
                                    <div>
                                        <label htmlFor="role">роль:</label>
                                        <input type="text" id="role" name="role" value={formData.role} onChange={handleChange} required />
                                    </div>
                                    <div>
                                        <label htmlFor="area">площадка:</label>
                                        <input type="text" id="area" name="area" value={formData.area} onChange={handleChange} required />
                                    </div>
                                    <div>
                                        <label htmlFor="shop">магазин:</label>
                                        <input type="text" id="shop" name="shop" value={formData.shop} onChange={handleChange} required />
                                    </div>
                                    <div>
                                        <label htmlFor="img">фотография:</label>
                                        <input type="file" id="img" name="img" onChange={handleChange} />
                                    </div>
                                    <button type="submit">регистрация</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export { Personal };
