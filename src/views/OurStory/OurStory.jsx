import useFirestore from "../../hooks/useFirestore";

const OurStory = () => {
  const { docs } = useFirestore("images");

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div>
          <div className='py-5 px-10'>
            <div>
              <div className='heading'>September 2020</div>
              <p>
                Peter and Jessica matched on Tinder in September 2020. Jessica liked Peter&apos;s profile first and had
                to wait for what felt like forever for Peter to like her profile back. Eventually, Peter liked Jessica
                and messaged her &quot;Do you want to play a game?&quot;. Much to Jessica&apos;s dismay (as Jessica
                hates games) she agreed. The game Peter wanted to play was a question game to get to know each other.
                The rules were you had to answer truthfully and the first one to refuse to answer or repeat a question
                would be the loser. After almost two months of playing and much to Peter&apos;s heartbreak, Jessica won.
              </p>
            </div>
            <div>
              <div className='heading'> November 2020</div>
              <p>
                After weeks of Peter asking, Jessica finally agreed to meet Peter. Before meeting up with Peter, Jessica
                gave her mum and dad access to track her phone just in case Peter turned out to be a murderer. They met
                on the 8th of November 2020 down Cardiff Bay. Jessica took Peter on her favourite walk around the Bay
                and Penarth. They walked down to the wetlands where Peter was able to see Jessica&lsquo;s fear of
                fireworks in person. At the end of every date, Jessica would say &ldquo;I had fun doing whatever this
                is&rdquo; which started to annoy Peter as he started to develop feelings for Jessica. Eventually, on the
                12th of November 2020, Peter asked Jessica to be his girlfriend.
              </p>
            </div>
            <div>
              <div className='heading'> 2021</div>
              <p>
                In January, Peter met Emlyn, Fiona and Dave for the first time, and a few weeks later Peter met, Kirsty,
                Jordan, Freya, Esme, and Natasha. In March, it was Jessica turn to met Peter&apos;s family. Jessica met
                Gareth, Chris, Andy and Ian. With the support from their families, Peter asked Jessica to move in with him.
                They did some searching and found a lovely house in Llanharan and they got the keys to 14 Lonydd Glas.
              </p>
            </div>
            <div>
              <div className='heading'> 2022</div>
              <p>
                Peter and Jessica decided to take the next big step and decide to buy a house together. Peter soon
                realised it was easier to just agree with Jessica when it came to designing and decorating their house.
                They got the keys to their new home on the 16th of November 2022 and moved in on the 3rd December 2022.
              </p>
            </div>
            <div>
              <div className='heading'>14th of July 2023</div>
              <p>
                On the 14th of July 2023, Peter booked a table for lunch and planned a walk around Cardiff Bay,(where
                they first met). Jessica insisted on going on a walk before food, making Peter change his plans. As they
                started walking around Cardiff Bay it started to rain. Jessica said let&rsquo;s turn back but Peter
                insisted they continue. They walked around Cardiff Bay to the Wetlands, where Peter suggested walking
                down the pier where they had their first kiss.As they turned to walk back as it was raining so much,
                Peter got down on one knee and through his tears asked Jessica &quot;Will you Marry Me?&quot;
              </p>
            </div>
            <div>
              <div className='heading'>8th of November 2024</div>
              <p>Our Wedding Day.. The Beginning of Our Next Chapter .....</p>
            </div>
          </div>
        </div>
        <div>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-0'>
            {docs &&
              docs.slice(-15).map((doc) => (
                <div key={doc.id} className='overflow-hidden h-0 py-[50%] px-0 relative'>
                  <img
                    src={doc.url}
                    alt='pic'
                    className='max-w-full max-h-full absolute top-0 bottom-0 left-0 right-0 margin-auto object-cover object-top  w-full h-full'
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStory;
