import { Webhook } from 'lucide-react';
import { useState, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Users, User } from 'lucide-react';
import PageTranstion from '../PageTransition/PageTransition'

export function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    type User = {
        name: string;
        href: string;
        icon: ReactNode;
    }

    const navigation: User[] = [
          { name: 'Главная', href: '/', icon: <Home className='w-5 h-5 mr-2'/> },
          { name: 'О нас', href: '/about', icon: <Users className='w-5 h-5 mr-2'/> },
          { name: 'Личный кабинет', href: '/profile', icon: <User className='w-5 h-5 mr-2'/> },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
        <PageTranstion>
        <header className="w-full flex justify-between p-5 items-center bg-white shadow-lg" >
            <Link to='/ 'className="text-3xl flex items-center duration-300 transition-all ease hover:text-4xl cursor-pointer hover:text-blue-500">
            <Webhook className='w-10 h-10 mr-3'/>FrontendSchool
            </Link>
    
        <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
            return (
                <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center px-3 py-2 text-xl rounded-md transition-colors duration-200 
                        ${isActive(item.href) ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'}`}
                >
                    {item.icon}
                    <span>{item.name}</span>
                </Link>
                )
            })}
          </div>

          <div className='lg:hidden flex items-center'>
            <button 
            onClick={() => setIsOpen(!isOpen)}
            className='text-gray-600 hover:text-blue-600 focus:outline-none'
            >
                {isOpen ? (
                    <X className='w-5 h-5'/> )
                    : (
                    <Menu className='w-5 h-5'/>)
                }
            </button>
          </div>
              
          {isOpen && (
            <div className='lg:hidden px-2 pt-2 pb-3 space-y-1'>
                {navigation.map((item) => {
                    return (
                        <Link key={item.name}
                        to={item.href}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium 
                        ${isActive(item.href) ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'}`}
                        onClick={() => setIsOpen(false)}>
                            {item.icon}
                            <span>{item.name}</span>
                        </Link>
                    )
                })}
            </div>
          )}
          </header>
          </PageTranstion>
        </>
    )
}