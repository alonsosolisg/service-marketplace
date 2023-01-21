import { useWeb3 } from "@components/providers"
import { ActiveLink, Button } from "@components/ui/common"
import { useAccount } from "@components/hooks/web3"
import { useRouter } from "next/router"

export default function Navbar() {
  const { connect, isLoading, requireInstall } = useWeb3()
  const { account } = useAccount()
  const { pathname } = useRouter()

    return(
      <section>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav className="relative" aria-label="Global">
            <div className="flex flex-col xs:flex-row justify-between items-center">
              <div>
                <ActiveLink href="/">
                  <a 
                    className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                      Home
                  </a>
                </ActiveLink>
                <ActiveLink href="/marketplace" >
                  <a 
                    className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                      Marketplace
                  </a>
                </ActiveLink>                            
              </div>
              <div className="text-center">
                { isLoading ?
                  <Button
                    disabled={true}
                    onClick={connect} >
                      Loading...
                  </Button> : 
                  account.data ?
                  <Button 
                    hoverable={false}
                    className="cursor-default">
                      Hi there {account.isAdmin && "EL ADMIN"}
                  </Button> :
                  requireInstall ?
                  <Button
                    onClick={() => window.open("https://metamask.io/download.html", "_blank")} >
                    Install Metamask
                  </Button> :
                  <Button
                    onClick={connect} >
                    Connect
                  </Button>
                    
                }  
              </div>
            </div>
          </nav>
        </div>
        { account.data &&
          !pathname.includes("/marketplace") && 
          <div className="flex justify-end pt-1 sm:px-6 lg:px-8">
            <div className="text-white bg-purple-500 rounded-md p-2">
              {account.data}
            </div>
          </div>
        }
      </section>   
    )
  }