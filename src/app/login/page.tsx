import Image from 'next/image'
import Logo from 'public/img/logo.png'

type Props = {
  label : string,
  type: string
}

function Input({label,type}:Props){
  return(
    <div className='flex flex-col mt-5'>
      <label className='text-white mb-1' htmlFor="">{label}</label>
      <input className='outline-none pl-2 h-[40px] rounded-lg' key={label} name={label} type={type} />
    </div>
  )
}

export default function Login() {
  return (
    <main className="bg-roxo flex min-h-screen flex-col">
      <div className='flex items-center justify-center py-24'>
        <Image src={Logo} alt='logo'  />
      </div>
      <div className='flex justify-center'> 
        <div className='w-[90%] max-w-[400px] '>
          <Input label='Usuário' type='text'/> 
          <Input label='Senha' type='text'/>
          <div className='flex flex-col mt-10 text-white'>
            <button className='bg-laranja rounded-lg h-[40px] text-center'>Fazer Login</button>
          </div>
        </div>
      </div>
      <div className='text-center text-white py-20'>
        <p>© Todos os direitos reservados</p> 
      </div>
    </main>
  )
}
