import React from 'react'
import { Footer, FooterCopyright, FooterDivider, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {BsFacebook, BsInstagram, BsTwitter, BsGithub} from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                    <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                                <span className='px-2 py-1 bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 rounded-lg text-white'>Film</span>
                                Ledger
                    </Link>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                    <FooterTitle title='About' />
                    <FooterLinkGroup col>
                        <FooterLink href='https://www.linkedin.com/in/ram-mohan-adabala' target='_blank' rel='noopener noreferrer'>
                            LinkedIn
                        </FooterLink>
                    </FooterLinkGroup>
                    </div>
                    <div>
                    <div>
                    <FooterTitle title='Follow US' />
                    <FooterLinkGroup col>
                        <FooterLink href='https://www.github.com/ram-mohan2305' target='_blank' rel='noopener noreferrer'>
                            GitHub
                        </FooterLink>
                        <FooterLink href='https://discordapp.com/users/843841701033803826' target='_blank' rel='noopener noreferrer'>
                            Discord
                        </FooterLink>
                    </FooterLinkGroup>
                    </div>
                    </div>
                    <div>
                    <FooterTitle title='LEGAL' />
                    <FooterLinkGroup col>
                        <FooterLink href='#'>
                            Privacy Policy
                        </FooterLink>
                        <FooterLink href='#'>
                            Terms &amp; Conditions
                        </FooterLink>
                    </FooterLinkGroup>
                    </div>
                </div>
            </div>
            <FooterDivider />
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <FooterCopyright href='#' by='FilmLedger' year={new Date().getFullYear()}/>
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <FooterIcon href='#' icon={BsFacebook}/>
                    <FooterIcon href='https://www.instagram.com/__ram.mohan__/' icon={BsInstagram}/>
                    <FooterIcon href='https://x.com/keshu2305' icon={BsTwitter}/>
                    <FooterIcon href='https://github.com/ram-mohan2305' icon={BsGithub}/>
                </div>
            </div>
        </div>
    </Footer>
  )
}
