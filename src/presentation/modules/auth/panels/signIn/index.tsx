import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

// Imporatation des utils
import { getCopyrightText } from 'src/presentation/utils/config/copyright';

// Importation des composants
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import DarkModeSwitch from 'src/presentation/components/darkMode/DarkModeSwitch';
import { Checkbox } from '@nextui-org/checkbox';

// Importation des icones
import { Eye, EyeOff } from 'lucide-react';

// Importation des resources
import ABM from 'src/presentation/assets/image/icons/access-bank.png';
import MyTick from 'src/presentation/assets/image/icons/mytick/MyTickLogo_192.webp';
import InfoIcon from 'src/presentation/assets/image/icons/box-important.png';

/**
 *
 * @desc: Interface du Panel de connexion
 */
const SignIn: FC = () => {
    const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);

    const toggleVisibilityPassword = (): void =>
        setIsVisiblePassword(!isVisiblePassword);

    return (
        <div className="sign-in h-full flex flex-row">
            <div className="absolute bottom-[80px] right-10 hidden md:flex">
                <div className="backdrop-blur-sm w-[320px] h-[150px] rounded-xl bg-primary dark:bg-dark-custom-glass float-right  mt-[170px] p-4 font-syne border border-slate-100 text-slate-800 dark:text-slate-100 border-opacity-10 shadow-lg">
                    <h4 className="flex items-center">
                        <img
                            src={InfoIcon}
                            alt="Info"
                            width={'24px'}
                            height={'20px'}
                            className="mr-1"
                        />
                        Instructions
                    </h4>
                    <p className="text-[14px] text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iste, commodi. Iste, dolorem atque ab sunt tempore
                        voluptatem, fuga esse non vitae possimus.
                    </p>
                </div>
            </div>

            <div className="w-full sign-in-right flex flex-col px-9 py-4 justify-between">
                <div className="flex w-full sign-right-top justify-between fadeIn">
                    <div className="sign-top-left flex items-center font-syne">
                        <img src={MyTick} alt="My Tick" width={'50px'} />
                        <p className="text-[18px] flex flex-col ml-2">
                            <span className="font-Poppins font-extrabold text-slate-800">
                                My Tick
                            </span>
                            <span className="text-[10px] ">by ABM</span>
                        </p>
                    </div>
                    <DarkModeSwitch />
                </div>

                <div className="sign-middle w-full bg-red flex">
                    <div className="hidden lg:flex w-2/3 items-center flex-col justify-around">
                        <div className="flex gap-6 swipeFadeDown">
                            <div className="sign-image2 h-[280px] w-[180px] bg-primary-800 rounded-2xl transition hover:scale-110 hover:rotate-[5deg] outline outline-offset-2 outline-primary-300 shadow-lg"></div>
                            <div className="sign-image3 h-[240px] w-[180px] bg-primary-800 rounded-2xl mt-[130px]  transition hover:scale-105 hover:-rotate-[5deg] shadow-lg outline outline-offset-2 outline-danger-300"></div>
                        </div>
                    </div>

                    <div className="sign-form zoom w-[90%] lg:w-1/3 mx-auto">
                        <div className="sign-in-title font-syne text-center mx-auto mb-4">
                            <h2 className="font-bold text-slate-900 text-2xl dark:text-slate-200">
                                Bienvenue sur
                            </h2>
                            <h1 className="font-bold mt-1 text-slate-900 text-6xl dark:text-slate-200 w-full">
                                My Tick
                            </h1>
                            <p className="font-bold text-slate-500 text-xs mt-4 dark:text-slate-400">
                                Créez vos Tickets en Toute Simplicité
                            </p>
                        </div>

                        <div className="form flex w-full flex-col flex-wrap items-end sm:flex-nowrap mb-6 md:mb-0 font-syne">
                            <Input
                                key={'outside'}
                                size={'lg'}
                                isClearable
                                type="text"
                                radius={'md'}
                                label="session"
                                labelPlacement={'outside'}
                                description={'Entrer votre session'}
                                isInvalid={false}
                                errorMessage="Erreur de mot de passe"
                                classNames={{
                                    input: 'focus:outline-none focus:border-none bg-black',
                                }}
                            />
                            <Input
                                key={'outside'}
                                size={'lg'}
                                radius={'md'}
                                label="Mot de passe"
                                labelPlacement={'outside'}
                                description={'Entrer votre mot de passe'}
                                isInvalid={false}
                                errorMessage="Erreur mot de passe"
                                endContent={
                                    <button
                                        className="focus:outline-none"
                                        type="button"
                                        onClick={toggleVisibilityPassword}
                                        aria-label="toggle password visibility"
                                    >
                                        {isVisiblePassword ? (
                                            <Eye className="text-2xl text-default-400 pointer-events-none" />
                                        ) : (
                                            <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                                        )}
                                    </button>
                                }
                                type={isVisiblePassword ? 'text' : 'password'}
                            />

                            <div className="form-options flex justify-between w-full bg-red">
                                <Checkbox
                                    defaultSelected
                                    size="sm"
                                    color="success"
                                    className="text-[10px]"
                                >
                                    se souvenir de moi
                                </Checkbox>

                                <Link
                                    className="text-[10px]"
                                    to={'/forgot-password'}
                                >
                                    mot de passe oublié?
                                </Link>
                            </div>

                            <Button color="primary" className="w-full mt-10">
                                se connecter
                            </Button>
                        </div>
                    </div>

                    <div className="hidden lg:flex w-2/3 items-center flex-col justify-around">
                        <div className="flex gap-6 swipeFadeUp">
                            <div className="h-[300px] w-[180px] bg-primary-800 sign-image rounded-2xl mt-[130px]  transition hover:scale-105 hover:rotate-[5deg] shadow-lg hover:outline hover:outline-offset-2 hover:outline-warning-300"></div>
                            <div className="sign-image2 h-[250px] w-[180px] bg-primary-800 rounded-2xl  transition hover:scale-110 hover:-rotate-[5deg] shadow-lg hover:outline hover:outline-offset-2 hover:outline-success-300"></div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center md:flex-row md:justify-between fadeIn">
                    <div className="flex font-syne text-[12px] text-slate-900 items-start">
                        <span className="opacity-80 mt-2 mr-[7px] dark:text-slate-100">
                            Made with love ❤ by
                        </span>
                        <a
                            href="www.accesbanque.mg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={ABM}
                                alt="Accès Banque"
                                width={'130px'}
                                className="mr-[10px]"
                            />
                        </a>
                    </div>
                    <p
                        className={
                            'font-Poppins text-center font-normal text-[11px] mt-4 float-right opacity-80'
                        }
                        dangerouslySetInnerHTML={{ __html: getCopyrightText() }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SignIn;
