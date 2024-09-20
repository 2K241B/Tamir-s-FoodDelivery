'use client';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Card from './Card';
import { X } from 'lucide-react';
const style = {
  container: 'flex flex-col gap-[14px] items-start',
  imgContainer: 'relative w-[282px] min-h-[186px] rounded-2xl',
  discount:
    ' absolute rounded-2xl py-1 px-4 text-lg font-semibold text-white bg-[#18BA51] border-white border-[1px] flex justify-center items-center top-4 right-4',
  title: 'text-[20px] font-[590]',
  price: 'text-[#18BA51] font-semibold text-lg',
  salePrice: 'text-lg line-through',
};

const styles = {
  dialogContent:
    'min-w-[981px] min-h-[548px] flex flex-row gap-[33px] items-center',
  subContainer: 'flex flex-col gap-8 max-w-[384px] my-auto',
  header: 'text-[28px] font-bold',
  subHeader: 'text-[18px] font-semibold',
  button: 'rounded-[10px] bg-[#18BA51] text-white h-10',
  submitButton: ' bg-[#18BA51] text-white rounded-[4px] w-full h-12',
  current: 'min-w-[254px] flex items-center justify-center font-semibold',
  recipe:
    'text-[#767676] p-3 bg-[#F6F6F6] rounded-[8px] flex items-center justify-start',
  price: 'text-[18px] font-semibold text-[#18BA51]',
  buttonContainer: 'flex justify-between gap-5',
};

export const OrderDetailDialog = ({
  name,
  price,
  recipe,
  imageSrc,
  discount,
  alt,
  params,
}) => {
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    if (current < 1) return setCurrent(1);
  }, [current]);
  return (
    <Dialog>
      <DialogTrigger>
        <Card
          params={params}
          title={name}
          price={price}
          discount={discount}
          imageSrc={imageSrc}
          alt={alt}
        />
      </DialogTrigger>
      <DialogContent className={styles.dialogContent}>
        <div className="relative w-[500px] h-[500px]">
          <Image src={imageSrc} fill style={{ objectFit: 'cover' }} alt={alt} />
        </div>
        <DialogClose className="absolute right-6 top-6">
          <X />
        </DialogClose>
        <div className={styles.subContainer}>
          <div>
            <h2 className={styles.header}>{name}</h2>
            <div className="flex items-center gap-4">
              {discount ? (
                <p className={styles.price}>
                  {price - (price / 100) * discount}₮
                </p>
              ) : (
                <p className={styles.price}>{price}₮</p>
              )}
              {discount && <p className={style.salePrice}>{price}₮</p>}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className={styles.subHeader}>Орц</h4>
            <p className={styles.recipe}>{recipe}</p>
          </div>
          <h4 className={styles.subHeader}>Тоо</h4>
          <div className={styles.buttonContainer}>
            <Button
              onClick={() => setCurrent(current - 1)}
              className={styles.button}
            >
            </Button>
            <p className={styles.current}>{current}</p>
            <Button
              onClick={() => setCurrent(current + 1)}
              className={styles.button}
            >
            </Button>
          </div>
          <DialogClose>
            <Button className={styles.submitButton} type="submit">
              Сагслах
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailDialog;