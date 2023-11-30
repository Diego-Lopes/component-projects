'use client'
import { ArrowRight, Check, Rocket, X } from "lucide-react";
import { Notification } from "./notification";


export function Widget() {
  return (
    <div className="w-[448px] rounded overflow-hidden">
      <div className="bg-zinc-200 dark:bg-zinc-800 py-4 px-6 flex items-center justify-between">
        <span className="font-bold">Notificaçõs</span>
        <button className="text-violet-500 font-bold text-xs hover:text-violet-400">
          MARCAR TODAS COMO VISITAS
        </button>
      </div>

      <div>
        <div className="bg-zinc-300 dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-500 dark:text-zinc-400">
          Recentes
        </div>

        <div className='divide-y-2 divide-zinc-950'>
        <Notification.Root>
          <Notification.Icon icon={Rocket}/>
          <Notification.Content text="Você recebeu um convite para fazer parte do clube bem10"/>
          <Notification.Actions>
            <Notification.ActionButton onClick={() => {console.log("Clicou em cancelar")}} icon={X} />
            <Notification.ActionButton onClick={() => {console.log("Clicou em aceitar")}} icon={Check} className="bg-violet-500 hover:bg-violet-600 dark:hover:bg-violet-600"/>
          </Notification.Actions>
        </Notification.Root>
         
        <Notification.Root>
          <Notification.Icon icon={Rocket}/>
          <Notification.Content text="Você recebeu um convite para fazer parte do clube bem10"/>
          <Notification.Actions>
            <Notification.ActionButton onClick={() => {console.log("Clicou em aceitar")}} icon={ArrowRight} className="bg-green-500 hover:bg-green-600 dark:hover:bg-green-600"/>
          </Notification.Actions>
        </Notification.Root>
        </div>
      </div>

      <div>
        <div className="bg-zinc-950 px-5 py-2 text-sm text-zinc-400">
          Antigas
        </div>

        <div className='divide-y-2 divide-zinc-950'>
        <Notification.Root>
          <Notification.Content text="Você recebeu um convite para fazer parte do clube bem10"/>
        </Notification.Root>

        </div>
      </div>

    </div>
  )
}